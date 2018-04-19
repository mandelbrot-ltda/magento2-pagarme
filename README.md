[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2213fc1ce8f14e7bb0861f232a310233)](https://www.codacy.com/app/pagarme/magento2?utm_source=github.com&utm_medium=referral&utm_content=pagarme/magento2&utm_campaign=badger)
[![Maintainability](https://api.codeclimate.com/v1/badges/e279af4b87b47e56723a/maintainability)](https://codeclimate.com/github/pagarme/magento2/maintainability)
[![Latest Stable Version](https://poser.pugx.org/pagarme/pagarme-magento2-module/v/stable)](https://packagist.org/packages/pagarme/pagarme-magento2-module)
[![Total Downloads](https://poser.pugx.org/pagarme/pagarme-magento2-module/downloads)](https://packagist.org/packages/pagarme/pagarme-magento2-module)

# Magento2/PagarMe Integration module
This is the official Magento2 module for PagarMe integration

# Documentation
Refer to [module documentation](https://github.com/pagarme/magento2/wiki)

# Plugin in Magento Marketplace
Coming soon :construction:

# Installation

This module is now available through *Packagist*! You don't need to specify the repository anymore.

[https://packagist.org/packages/pagarme/pagarme-magento2-module](https://packagist.org/packages/pagarme/pagarme-magento2-module)

Add the following lines into your composer.json 
```
{
	"require": {
		"pagarme/pagarme-magento2-module":"^1.2"
	}
}
```

or simply digit 
```
composer require pagarme/pagarme-magento2-module
```
 
Then type the following commands from your Magento root:

```
composer update
./bin/magento setup:upgrade
./bin/magento setup:di:compile
```

# Requirements
* PHP >= 5.6
* Magento >= 2.1

# Configuration

After installation has completed go to **Stores** > **Settings** > **Configuration** > **Sales** > **Payment Methods** > **Other Payment Methods** > **PagarMe Payments**.

To learn more about how detailed configure the module, see our [wiki](https://github.com/pagarme/magento2/wiki)

# Business/Technical Support

Please, send a e-mail to [suporte@pagar.me](mailto:suporte@pagar.me)

# How can I contribute?
Please, refer to [CONTRIBUTING](CONTRIBUTING.md)

# Found something strange or need a new feature?
Open a new Issue following our issue template [ISSUE-TEMPLATE](ISSUE-TEMPLATE.md)

# Changelog
See in [releases](https://github.com/pagarme/magento2/releases)
