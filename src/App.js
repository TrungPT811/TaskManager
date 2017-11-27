import React, { Component } from 'react';
import './App.css';

import TaskForm from './components/TaskForm';
import SearchControl from './components/SearchControl';
import SortControl from './components/SortControl';
import FilterControl from './components/FilterControl';
import TaskList from './components/TaskList';

import {randomString} from './helpers/StringHelpers';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            isDisplayForm: false
        };
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));

            this.setState({
                tasks
            });
        }
    }

    handleGenerateData() {
        var tasks = [
            {
                id: this.generateId(),
                name: 'Fucking FFTool',
                status: true,
            },
            {
                id: this.generateId(),
                name: 'EPiCA bullshit',
                status: false,
            }
        ];

        this.setState({
            tasks
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    handleDisplayForm = () => {
        this.setState({
            isDisplayForm: true
        });
    }

    handleCloseForm = () => {
        this.setState({
            isDisplayForm: false
        });
    }

    handleSubmitForm = (data) => {
        data.id = this.generateId();

        var {tasks} = this.state;

        tasks.push(data);

        this.setState({
           tasks
        });

        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    generateId() {
        return randomString() + randomString() + '-' + randomString() + '-'
            + randomString() + randomString() + '-' + randomString();
    }

    render() {
        return (
            <div className="container">
                <div className="text-center"><h1>Quản Lý Công Việc</h1><hr /></div>
                <div className="row">
                    {this.state.isDisplayForm ? (
                        <div className="col-xs-12 col-sm-12 col-lg-4">
                        {/* TaskForm */}
                        <TaskForm handleSubmitForm={this.handleSubmitForm} handleCloseForm={ this.handleCloseForm } />
                        </div> )
                        : (<div></div>)
                    }
                    <div className={ this.state.isDisplayForm
                        ? 'col-xs-12 col-sm-12 col-lg-8'
                        : 'col-xs-12 col-sm-12 col-lg-12' }>

                        {this.state.isDisplayForm === false ? (
                        <button type="button"
                                className="btn btn-primary"
                                onClick={ this.handleDisplayForm }
                            >
                            <span className="fa fa-plus mr-5"> Thêm công việc</span>
                        </button> ) : (<div></div>) }

                        <button type="button"
                                className="btn btn-info ml-5"
                                onClick={ this.handleGenerateData.bind(this) }>
                            Tạo dữ liệu mẫu
                        </button>
                        {/* Search & Sort & Filter */}
                        <div className="row mt-15">
                            <SearchControl />
                            <SortControl />
                        </div>
                        <div className="row mt-15">
                            <FilterControl />
                        </div>
                        {/* List */}
                        <div className="row mt-15">
                            <TaskList tasks={ this.state.tasks } />
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}

export default App;
