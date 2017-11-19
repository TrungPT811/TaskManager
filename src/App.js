import React, { Component } from 'react';
import './App.css';

import TaskForm from './components/TaskForm';
import SearchControl from './components/SearchControl';
import SortControl from './components/SortControl';
import FilterControl from './components/FilterControl';

class App extends Component {
  render() {
    return (
        <div className="container">
            <div className="text-center"><h1>Quản Lý Công Việc</h1><hr /></div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-lg-4">
                    {/* TaskForm */}
                    <TaskForm />
                </div>
                <div className="col-xs-12 col-sm-12 col-lg-8">
                    <button type="button" className="btn btn-primary">
                        <span className="fa fa-plus mr-5"> Thêm công việc</span>
                    </button>
<<<<<<< HEAD
                    {/* Search & Sort */}
=======
                    {/* Search & Sort & Filter */}
>>>>>>> update public folder
                    <div className="row mt-15">
                        <SearchControl />
                        <SortControl />
                    </div>
                    <div className="row mt-15">
                        <FilterControl />
                    </div>
                    {/* List */}
                    <div className="row mt-15">
                        <div className="col-xs-12 col-md-12 col-lg-12">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center">STT</th>
                                        <th className="text-center">Tên</th>
                                        <th className="text-center">Trạng thái</th>
                                        <th className="text-center">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                            <td>1</td>
                                            <td>Học ReactJS</td>
                                            <td className="text-center">
                                                <span className="label label-danger">Kích hoạt</span>
                                            </td>
                                            <td className="text-center" width="30%">
                                                <button type="button" className="btn btn-info">
                                                    <span className="fa fa-pencil mr-5"></span> Sửa
                                                </button>
                                                &nbsp;
                                                <button type="button" className="btn btn-danger">
                                                    <span className="fa fa-pencil mr-5"></span> Xóa
                                                </button>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
