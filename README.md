# ExchangeRateService

This service is designed to fetch real-time exchange rates using the ExchangeRate-API.

## Getting Started

To use this service, you first need to sign up for a free API key at https://www.exchangerate-api.com/.

### Installing

After obtaining your API key, replace `YOUR-API-KEY` in the `ExchangeRateService` with your actual API key.

### Usage

Import `ExchangeRateService` into your Angular component:

```typescript
import { ExchangeRateService } from './services/exchange-rate.service';
```

Inject the service in your component's constructor:

```trpescript
constructor(private exchangeRateService: ExchangeRateService) {}
```

Use the getLatestRates method to fetch exchange rates:

```typescript
this.exchangeRateService.getLatestGBPExchangeRates().subscribe(data => {
  console.log('GBP Exchange Rates:', data);
});
```
Contributing
Feel free to fork this repository and submit pull requests.

License
This project is licensed under the MIT License.
