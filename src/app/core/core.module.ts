import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// Services
import { ApiService } from './services/api.service';
import { AuthenticationService } from './services/auth.service';

@NgModule({
    declarations: [],
    imports: [HttpClientModule],
    providers: [ApiService, AuthenticationService],
})
export class CoreModule {}
