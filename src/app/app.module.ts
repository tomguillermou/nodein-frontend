import { NgModule } from '@angular/core';

// App routing
import { AppRoutingModule } from './app-routing.module';

// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Pages
import { HomeModule } from './pages/home/home.module';

// App + layout components
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';

@NgModule({
    imports: [AppRoutingModule, CoreModule, SharedModule, HomeModule],
    declarations: [HeaderComponent, AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
