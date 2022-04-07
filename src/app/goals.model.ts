import {HighPriorityList} from './highprioritylist.model';
import {MediumPriorityList} from './mediumprioritylist.model';
import {LowPriorityList} from './lowprioritylist.model';


export interface Goals{

  goalTitle: String;
  description: String;
  goalCreationDate: Date;
  goalDueDate: Date;
  HighPriority: [HighPriorityList];
  MediumPriority: [MediumPriorityList];
  LowPriority: [LowPriorityList];

}
