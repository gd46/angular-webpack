if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime');

  runtime.install({
    onUpdateReady() {
      runtime.applyUpdate();
    },
    onUpdated() {
      window.location.reload();
    },
  });
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './polyfills';
import { AppModule } from './components/app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);