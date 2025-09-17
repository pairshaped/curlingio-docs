import React, { useState } from 'react';
import styles from './PricingCalculator.module.css';

export default function PricingCalculator() {
  const [country, setCountry] = useState('CA');
  const [online, setOnline] = useState(true);
  const [offline, setOffline] = useState(false);
  const [premium, setPremium] = useState(false);
  const [amount, setAmount] = useState(100000);

  const currencySymbol = country === 'UK' ? '£' : '$';
  const currencyLocale = country === 'UK' ? 'en-GB' : 'en-US';
  const formatCurrency = (value, options = {}) => {
    const minimumFractionDigits = options.minimumFractionDigits ?? 0;
    const maximumFractionDigits = options.maximumFractionDigits ?? 0;
    const formattedValue = Number(value || 0).toLocaleString(currencyLocale, {
      minimumFractionDigits,
      maximumFractionDigits
    });
    return `${currencySymbol}${formattedValue}`;
  };

  const updateCalculation = () => {
    let planName = '';
    let processingRate = '';
    let transactionCost = 0;
    let annualFee = '';
    let premiumNotice = '';
    let monthlyFee = 0;

    // Determine processing rate based on toggles
    if (online) {
      const isCanada = country === 'CA';
      const isUnitedStates = country === 'US';
      const isUnitedKingdom = country === 'UK';

      let percentageRate = 0;
      let perTransactionFee = 0.30;

      if (isCanada) {
        percentageRate = offline ? 0.029 : 0.027;
        const displayRate = offline ? '2.9%' : '2.7%';
        processingRate = `${displayRate} + ${currencySymbol}0.30`;
      } else if (isUnitedStates) {
        percentageRate = 0.029;
        processingRate = `2.9% + ${currencySymbol}0.30`;
      } else if (isUnitedKingdom) {
        percentageRate = 0.022;
        processingRate = `2.2% + ${currencySymbol}0.30`;
      }

      transactionCost = (amount * percentageRate) + (Math.ceil(amount / 400) * perTransactionFee);

      if (isUnitedStates) {
        monthlyFee = 20;
      }
    }

    // Determine plan based on payment options
    if (!online && !offline) {
      if (premium) {
        planName = 'Premium (Annual)';
        annualFee = `${formatCurrency(420)}/year`;
        premiumNotice = '✓ Premium features with annual fee';
      } else {
        planName = 'Essential (Free)';
        annualFee = formatCurrency(0);
        premiumNotice = 'Core features only';
      }
      processingRate = 'No payments';
      transactionCost = 0;
    } else if (!online && offline) {
      if (premium) {
        planName = 'Premium (Annual)';
        annualFee = `${formatCurrency(420)}/year`;
        premiumNotice = '✓ Premium features with annual fee';
      } else {
        planName = 'Essential (Free)';
        annualFee = formatCurrency(0);
        premiumNotice = `Core features only - add premium for ${formatCurrency(420)}/year`;
      }
      processingRate = 'Free for offline payments';
      transactionCost = 0;
    } else {
      if (offline) {
        planName = 'Premium (Hybrid)';
      } else {
        planName = 'Premium (Online-Only)';
      }
      annualFee = `${formatCurrency(0)} (included with online payments)`;
      premiumNotice = '✓ Premium features included automatically';
    }

    // Calculate total cost
    let totalCost = transactionCost;
    if (premium && !online) {
      totalCost += 420;
    }
    if (monthlyFee && online) {
      totalCost += monthlyFee * 12;
    }

    return {
      planName,
      processingRate,
      annualFee,
      totalCost: Number(totalCost.toFixed(2)),
      premiumNotice,
      monthlyFee
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
          <span className={styles.countryLabel}>Club Location:</span>
          <div className={styles.radioGroup}>
            <label className={styles.toggleLabel}>
              <input
                type="radio"
                name="club-country"
                value="CA"
                checked={country === 'CA'}
                onChange={(e) => setCountry(e.target.value)}
              />
              <span>Canada</span>
            </label>
            <label className={styles.toggleLabel}>
              <input
                type="radio"
                name="club-country"
                value="US"
                checked={country === 'US'}
                onChange={(e) => setCountry(e.target.value)}
              />
              <span>United States</span>
            </label>
            <label className={styles.toggleLabel}>
              <input
                type="radio"
                name="club-country"
                value="UK"
                checked={country === 'UK'}
                onChange={(e) => setCountry(e.target.value)}
              />
              <span>United Kingdom</span>
            </label>
          </div>
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
            Online Payments Volume: {formatCurrency(online ? amount : 0)}
            <input
              type="range"
              value={online ? amount : 0}
              min="10000"
              max="1000000"
              step="1000"
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className={styles.slider}
              disabled={!online}
            />
            <div className={styles.sliderRange}>
              <span>{formatCurrency(10000)}</span>
              <span>{formatCurrency(1000000)}</span>
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
              <span>{formatCurrency(online ? amount : 0)}</span>
            </div>
            <div className={styles.costLine}>
              <span>Transaction count:</span>
              <span>{online ? Math.ceil(amount / 400).toLocaleString(currencyLocale) : '0'}</span>
            </div>
            <div className={styles.costLine}>
              <span>Processing Rate (includes credit card fees):</span>
              <span>{results.processingRate}</span>
            </div>
            {results.monthlyFee && online ? (
              <div className={styles.costLine}>
                <span>Monthly fee:</span>
                <span>{formatCurrency(results.monthlyFee, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            ) : null}
            <div className={styles.costLine}>
              <span>Annual premium fee:</span>
              <span>{results.annualFee}</span>
            </div>
            <div className={`${styles.costLine} ${styles.totalLine}`}>
              <span>Total Cost:</span>
              <span>{formatCurrency(results.totalCost, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
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
