import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventDetailFormValue } from '../models';
import { of } from 'rxjs';
import { parseISO } from 'date-fns';
import { RxEventDocumentType } from './db.service';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  public newForm(date: Date, defaults?: Partial<RxEventDocumentType>) {
    return new FormGroup<EventDetailFormValue>({
      id: new FormControl(defaults?.id || null),
      title: new FormControl(defaults?.title || ''),
      date: new FormControl(defaults?.date == null ? date : parseISO(defaults.date)),
      completed: new FormControl(defaults?.completed || false),
      notes: new FormControl(defaults?.notes || ''),
      color: new FormControl(defaults?.color || ''),
      deleted: new FormControl(defaults?._deleted || false),
    });
  }

  public newForm$(date: Date, defaults?: Partial<RxEventDocumentType>) {
    return of(this.newForm(date, defaults));
  }
}
