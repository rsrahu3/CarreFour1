import React from 'react';
import { connect } from 'react-redux';
import updateData from './../middleware/updateData';

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  editedData = (e, id, field) => {
    console.log(field);
    this.setState({ [field]: e.target.innerHTML, id: id });
  };

  render() {
    console.log(this.props.data);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SALARY</th>
            <th>AGE</th>
            <th>Profile Image</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(item => {
            return (
              <tr key={item.id}>
                {Object.keys(item).map(element => {
                  if (element !== 'isEdit')
                    if (element === 'profile_image') {
                      return (
                        <td key={item.id}>
                          <img
                            alt="rock"
                            key={item.id}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRykRYkBv9bVSk9ApAPwcYqqIbqBvHQ-H6fiUewUYslCQVvhjE"
                          />
                        </td>
                      );
                    } else
                      return (
                        <td key={element}>
                          <div
                            onInput={e => this.editedData(e, item.id, element)}
                            onChange={e => this.editedData(e, item.id, element)}
                            suppressContentEditableWarning={true}
                            contentEditable={item.isEdit}
                          >
                            {item[element]}
                          </div>
                        </td>
                      );
                  else return null;
                })}
                <td>
                  {!item.isEdit && (
                    <button
                      onClick={e => {
                        this.props.editRecord(item.id);
                      }}
                    >
                      Edit
                    </button>
                  )}
                  {item.isEdit && (
                    <button
                      onClick={e => {
                        this.props.SaveRecord(this.state);
                      }}
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.home.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editRecord: id =>
      dispatch({
        type: 'edit_record',
        payload: id
      }),
    SaveRecord: obj => {
      console.log(obj);
      dispatch(
        updateData({
          url: `http://dummy.restapiexample.com/api/v1/delete/${obj.id}`,
          type: 'delete_record',
          payload: obj
        })
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableComponent);
