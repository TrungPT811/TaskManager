import React, {Component} from 'react';

class TaskItem extends Component {
    render() {

        var {name, status}  = this.props.task;
        var {no}            = this.props;

        var statusClass = status === true ? 'label label-success' : 'label label-danger';
        var statusName  = status === true ? 'Kích hoạt' : 'Ẩn';

        return (
            <tr>
                <td>{no}</td>
                <td>{name}</td>
                <td className="text-center">
                    <span className={statusClass}>{statusName}</span>
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
        );
    }
}

export default TaskItem;