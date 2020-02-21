import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { applyCategoryColor } from './helper';

import { extend } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';
import * as dataSource from './datasource.json';
/**
 *  Schedule keyboard interaction sample
 */
export class KeyboardInteraction extends SampleBase {
    constructor() {
        super(...arguments);
        this.data = extend([], dataSource.zooEventsData, null, true);
    }
    onEventRendered(args) {
        applyCategoryColor(args, this.scheduleObj.currentView);
    }
    rendereComplete() {
        document.body.addEventListener('keydown', (e) => {
            let scheduleElement = document.getElementById('schedule');
            if (e.altKey && e.keyCode === 74 && scheduleElement) {
                scheduleElement.focus();
            }
        });
    }
    render() {
        return (<div className='schedule-control-section'>
        <div className='col-lg-12 control-section'>
          <div className='control-wrapper'>
            <ScheduleComponent id='schedule' width='100%' height='650px' selectedDate={new Date(2018, 1, 15)} ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.data }} eventRendered={this.onEventRendered.bind(this)}>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
            </ScheduleComponent>
          </div>
        </div>
      </div>);
    }
}

render(<KeyboardInteraction />, document.getElementById('sample'));