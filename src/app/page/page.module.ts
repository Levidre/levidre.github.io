import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IndexComponent } from "./pages/index/index.component";
import { AzuraComponent } from './pages/my-ghosts/azura/azura.component';
import { LevidreComponent } from './pages/levidre/levidre.component';
import { SaoriComponent } from './pages/saori/saori/saori.component';
import { InstallationOfGhostsComponent } from './pages/ukagaka/installation-of-ghosts/installation-of-ghosts.component';
import { MySaoriComponent } from './pages/saori/my-saori/my-saori.component';
import { SaoriCreationComponent } from './pages/saori/saori-creation/saori-creation.component';
import { UkagakaComponent } from './pages/ukagaka/ukagaka/ukagaka.component';
import { UpdateComponent } from './pages/update/update/update.component';
import { UpdateHistoryComponent } from './pages/update/update-history/update-history.component';
import { ZimComponent } from './pages/my-ghosts/zim/zim.component';
import { GhostJamsComponent } from './pages/ghost-jams/ghost-jams.component';
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [
    IndexComponent,
    AzuraComponent,
    LevidreComponent,
    SaoriComponent,
    InstallationOfGhostsComponent,
    MySaoriComponent,
    SaoriCreationComponent,
    UkagakaComponent,
    UpdateComponent,
    UpdateHistoryComponent,
    ZimComponent,
    GhostJamsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  exports: [
    IndexComponent,
    MaterialModule
  ],
  providers: []
})
export class PageModule { }
