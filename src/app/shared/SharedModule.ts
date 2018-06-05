
import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { UserService } from "./userServices";
import { FileLogger } from './file.logger';
import { ConsoleLogger } from './console.logger';

@NgModule({
  declarations:[TimePipe],
  imports:[],
  providers:[UserService, {provide:ConsoleLogger, useClass:FileLogger}],
  exports:[TimePipe]
})

export class SharedModule{}