import React, {Component} from 'react';

class FilterControl extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-6 col-md-6 col-lg-6">
                    <input type="text" className="form-control" name="filterName" />
                </div>
                <div className="col-xs-6 col-md-6 col-lg-3">
                    <select name="filterStatus" className="form-control">
                        <option value="-1">Tất cả</option>
                        <option value="0">Ẩn</option>
                        <option value="1">Kích hoạt</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default FilterControl;