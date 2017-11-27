import React, {Component} from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name : '',
            status: false
        }
    }

    handleCloseForm = () => {
        this.props.handleCloseForm();
    }

    handleChange = (event) => {
        var target  = event.target;
        var name    = target.name;
        var value  = target.value;

        if (name === 'status') {
            value =  value === 'true' ? true : false;
        }

        this.setState({
            [name] : value
        });
    }

    handleSubmitForm = (event) => {
        event.preventDefault();

        this.handleClearForm();
        this.props.handleSubmitForm(this.state);
    }

    handleClearForm = () => {
        this.setState({
            name : '',
            status : false
        });
    }

    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Thêm công Việc
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={ this.handleCloseForm } >
                        </span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmitForm}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <label>Trạng thái: </label>
                        <select
                            name="status"
                            id="status"
                            className="form-control"
                            value={this.state.status}
                            onChange={this.handleChange}
                        >
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">
                                <span className="fa fa-plus mr-5"></span> Lưu lại
                            </button>&nbsp;
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={this.handleClearForm}
                            >
                                <span className="fa fa-close mr-5"></span> Hủy bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;