import React, {Component} from 'react';
import {format, add, getWeeksInMonth, getDaysInMonth} from 'date-fns';
//import Day from './Day';
//import Month from './Month/Week';

class Calendar extends Component{
    constructor(props){
        super(props);
        this.state = {
            day: new Date()
        };
    }
    changeDay = options => {
        const {day} = this.state;
        const newDate = add(day, options);
        this.setState({day: newDate});
    }
    render(){
        const {day} = this.state;
        return(
            <div class="d-flex justify-content-center align-items-center">
                <div class="col-3 text-center text-white bg-primary">
                    <p>{format(day, 'EEEE')}</p>
                    <h1>{format(day, 'dd')}</h1>
                    <p>{format(day, 'LLLL yyyy')}</p>
                </div>
                <div class="col-3">
                    <p>
                        <div>[тут сетка]</div>
                        {/*
                            <div>{format(day, 'dd EEEE LLLL yyyy')}</div>
                            <div>This month contains {getWeeksInMonth(day)} weeks</div>
                            <div>This month contains {getDaysInMonth(day)} days</div>
                        */}
                    </p>
                    <div class="btn-group">
                        <button class="btn btn-success btn-sm" onClick={() => this.changeDay({days:1})}>Add day</button>
                        <button class="btn btn-dark btn-sm" onClick={() => this.changeDay({weeks:1})}>Add week</button>
                        <button class="btn btn-primary btn-sm" onClick={() => this.changeDay({years:1})}>Add year</button>
                    </div>
                </div>
            </div>
        );
    }
}
/*
const Calendar = ({currentDate}) => {
    return(
        <article>
            <Day currentDate={currentDate} />
            <Month date={currentDate} currentDate={currentDate}/>
        </article>
    );
};
*/
export default Calendar;