import { Pipe, PipeTransform  } from "@angular/core";
import * as moment from 'moment';

@Pipe({
    name:'relativeTime'
})

export class TimePipe implements PipeTransform{
    
    transform(date):string {
        return moment(date).fromNow();
    }
    
}