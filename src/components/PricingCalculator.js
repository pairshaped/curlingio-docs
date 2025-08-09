import React, { useState, useEffect } from 'react';
import styles from './PricingCalculator.module.css';

export default function PricingCalculator() {
  const [canadian, setCanadian] = useState(true);
  const [online, setOnline] = useState(false);
  const [offline, setOffline] = useState(true);
  const [premium, setPremium] = useState(false);
  const [amount, setAmount] = useState(50000);

  const updateCalculation = () => {
    let planName = '';
    let processingRate = '';
    let transactionCost = 0;
    let annualFee = '';
    let premiumNotice = '';

    // Determine processing rate based on toggles
    if (online) {
      if (canadian && !offline) {
        processingRate = '2.7% + $0.30';
        transactionCost = amount * 0.027 + 0.30;
      } else if (canadian && offline) {
        processingRate = '2.9% + $0.30';
        transactionCost = amount * 0.029 + 0.30;
      } else {
        processingRate = '3.6% + $0.35';
        transactionCost = amount * 0.036 + 0.35;
      }
    }

    // Determine plan based on payment options
    if (!online && !offline) {
      if (premium) {
        planName = 'Premium (Annual)';
        annualFee = '$420/year';
        premiumNotice = '✓ Premium features with annual fee';
      } else {
        planName = 'Essential (Free)';
        annualFee = '$0';
        premiumNotice = 'Core features only';
      }
      processingRate = 'No payments';
      transactionCost = 0;
    } else if (!online && offline) {
      if (premium) {
        planName = 'Premium (Annual)';
        annualFee = '$420/year';
        premiumNotice = '✓ Premium features with annual fee';
      } else {
        planName = 'Essential (Free)';
        annualFee = '$0';
        premiumNotice = 'Core features only - add premium for $420/year';
      }
      processingRate = 'Free for offline payments';
      transactionCost = 0;
    } else {
      if (offline) {
        planName = 'Premium (Hybrid)';
      } else {
        planName = 'Premium (Online-Only)';
      }
      annualFee = '$0 (included with online payments)';
      premiumNotice = '✓ Premium features included automatically';
    }

    // Calculate total cost
    let totalCost = transactionCost;
    if (premium && !online) {
      totalCost += 420;
    }

    return {
      planName,
      processingRate,
      annualFee,
      totalCost: totalCost.toFixed(2),
      premiumNotice
    };
  };

  const results = updateCalculation();

  return (
    <div className={styles.calculator}>
      <div className={styles.header}>
        <h4>Calculate Your Costs</h4>
        <p>See exactly what you'll pay based on your club's needs</p>
      </div>
      
      <div className={styles.inputs}>
        <div className={styles.inputRow}>
          <label className={styles.toggleLabel}>
            <input 
              type="checkbox" 
              checked={canadian}
              onChange={(e) => setCanadian(e.target.checked)}
            />
            <span>Canadian Club</span>
          </label>
        </div>
        
        <div className={styles.inputRow}>
          <label className={styles.toggleLabel}>
            <input 
              type="checkbox" 
              checked={online}
              onChange={(e) => {
                const checked = e.target.checked;
                setOnline(checked);
                if (!checked && !offline) {
                  setOffline(true);
                }
              }}
            />
            <span>Accept Online Payments</span>
          </label>
        </div>
        
        <div className={styles.inputRow}>
          <label className={styles.toggleLabel}>
            <input 
              type="checkbox" 
              checked={offline}
              onChange={(e) => {
                const checked = e.target.checked;
                setOffline(checked);
                if (!checked && !online) {
                  setOnline(true);
                }
              }}
            />
            <span>Accept Offline Payments</span>
          </label>
        </div>
        
        <div className={styles.inputRow}>
          <label className={`${styles.toggleLabel} ${online ? styles.disabled : ''}`}>
            <input 
              type="checkbox" 
              checked={online ? true : premium}
              onChange={(e) => setPremium(e.target.checked)}
              disabled={online}
            />
            <span>Premium Tier</span>
          </label>
        </div>
        
        <div className={styles.inputRow}>
          <label className={`${styles.amountLabel} ${!online ? styles.disabled : ''}`}>
            Online Payments Volume: {online ? `$${amount.toLocaleString()}` : '$0'}
            <input 
              type="range" 
              value={online ? amount : 0}
              min="50000" 
              max="600000"
              step="1000"
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className={styles.slider}
              disabled={!online}
            />
            <div className={styles.sliderRange}>
              <span>$50,000</span>
              <span>$600,000</span>
            </div>
          </label>
        </div>
      </div>
      
      <div className={styles.results}>
        <div className={styles.resultSection}>
          <h5>Your Plan: <span>{results.planName}</span></h5>
          <div className={styles.breakdown}>
            <div className={styles.costLine}>
              <span>Online Payments Volume:</span>
              <span>{online ? `$${amount.toLocaleString()}` : '$0'}</span>
            </div>
            <div className={styles.costLine}>
              <span>Transaction count:</span>
              <span>{online ? Math.ceil(amount / 400).toLocaleString() : '0'}</span>
            </div>
            <div className={styles.costLine}>
              <span>Processing Rate (includes credit card fees):</span>
              <span>{results.processingRate}</span>
            </div>
            <div className={styles.costLine}>
              <span>Annual premium fee:</span>
              <span>{results.annualFee}</span>
            </div>
            <div className={`${styles.costLine} ${styles.totalLine}`}>
              <span>Total Cost:</span>
              <span>${parseFloat(results.totalCost).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>
          <div className={styles.premiumNotice}>
            {results.premiumNotice}
          </div>
        </div>
      </div>
    </div>
  );
}