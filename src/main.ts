import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import * as $ from  '../../node_modules/jquery/dist/jquery.min.js';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
