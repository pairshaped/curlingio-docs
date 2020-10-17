# Website

This is the Curling I/O landing page and documentation site.

## Installation


### Git

Before you can begin writing documentation you'll need `git` installed. You can do this from your terminal (preferred) or by using github's desktop GUI found here: https://desktop.github.com/

For OSX if you don't have homebrew (https://brew.sh/) installed, you can install it first with the following in your terminal:
```console
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

From the terminal on OSX once you have homebrew installed:
```console
brew install git
```

If you're using a debian based Linux shell:
```console
sudo apt-get install git
```

### Nodejs

Make sure you have nodejs installed on your machine. The easiest (and most flexible) way to do this on a Mac or Linux based operating system is using nvm (https://github.com/nvm-sh/nvm#installing-and-updating).
Open up a terminal (osx) or shell (linux) and run the following:

```console
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
nvm install node
```

Then in your terminal / shell, `cd` into the project directory and install the libraries that this project uses:


### Project Dependencies

```console
cd curlingio-docs
yarn install
```


## Local Development

Once you have everything installed and setup locally, you can run a local preview environment by running the following in your terminal or shell:
```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.


## Deployment

By pushing your changes to git's master branch, or merging into master from a pull request, changes will be automatically deployed to our production environment using a Github action.
It may take a few minutes before changes show up on the live server.
