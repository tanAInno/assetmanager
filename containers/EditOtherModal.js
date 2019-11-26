import React, { Component } from 'react';
import axios from 'axios'
import '../css/EditModal.css'
import '../assets/fonts/fontface.css'
import { convertArrayToCSV } from 'convert-array-to-csv';
import Modal from 'react-modal';

class EditOtherModal extends Component {

    state = {
        id: this.props.edit._id,
        adminpass: this.props.edit.adminpass,
        name: this.props.edit.name,
        dealer: this.props.edit.dealer,
        type: this.props.edit.type,
        department: this.props.edit.department,
        brand: this.props.edit.brand,
        gen: this.props.edit.gen,
        model: this.props.edit.model,
        serial: this.props.edit.serial,
        warranty: this.props.edit.warranty,
        date: this.props.edit.date
    }

    async editComputer(){
        await axios.put("http://localhost:5000/api/other/" + this.state.id,{
            location: this.state.location,
            adminpass: this.state.adminpass,
            name: this.state.name,
            dealer: this.state.dealer,
            type: this.state.type,
            department: this.state.department,
            brand: this.state.brand,
            gen: this.state.gen,
            model: this.state.model,
            serial: this.state.serial,
            warranty: this.state.warranty,
            date: this.state.date
        }).catch(error => console.log(error))
        location.reload()
    }

    onInputChange(key, e) {
        if (key == "adminpass")
            this.setState({ adminpass: e.target.value })
        if (key == "name")
            this.setState({ name: e.target.value })
        if (key == "dealer")
            this.setState({ dealer: e.target.value })
        if (key == "type")
            this.setState({ type: e.target.value })
        if (key == "department")
            this.setState({ department: e.target.value })
        if (key == "brand")
            this.setState({ brand: e.target.value })
        if (key == "gen")
            this.setState({ gen: e.target.value })
        if (key == "model")
            this.setState({ model: e.target.value })
        if (key == "serial")
            this.setState({ serial: e.target.value })
        if (key == "warranty")
            this.setState({ warranty: e.target.value })
        if (key == "date")
            this.setState({ date: e.target.value })
    }

    render() {
        return(
            <div className="edit-modal">
                <div className="edit-modal-row">
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Adminpass : </div>
                        <input className="edit-modal-input" value={this.state.adminpass} onChange={e => this.onInputChange("adminpass", e)}/>
                    </div>
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Name : </div>
                        <input className="edit-modal-input" value={this.state.name} onChange={e => this.onInputChange("name", e)}/>
                    </div>
                </div>
                <div className="edit-modal-row">
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Dealer : </div>
                        <input className="edit-modal-input" value={this.state.dealer} onChange={e => this.onInputChange("dealer", e)}/>
                    </div>
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Type : </div>
                        <input className="edit-modal-input" value={this.state.type} onChange={e => this.onInputChange("type", e)}/>
                    </div>
                </div>
                <div className="edit-modal-row">
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Department : </div>
                        <input className="edit-modal-input" value={this.state.department} onChange={e => this.onInputChange("department", e)}/>
                    </div>
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Brand : </div>
                        <input className="edit-modal-input" value={this.state.brand} onChange={e => this.onInputChange("brand", e)}/>
                    </div>
                </div>
                <div className="edit-modal-row">
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Gen : </div>
                        <input className="edit-modal-input" value={this.state.gen} onChange={e => this.onInputChange("gen", e)}/>
                    </div>
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Model : </div>
                        <input className="edit-modal-input" value={this.state.model} onChange={e => this.onInputChange("model", e)}/>
                    </div>
                </div>
                <div className="edit-modal-row">
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Serial : </div>
                        <input className="edit-modal-input" value={this.state.serial} onChange={e => this.onInputChange("serial", e)}/>
                    </div>
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Warranty : </div>
                        <input className="edit-modal-input" value={this.state.warranty} onChange={e => this.onInputChange("warranty", e)}/>
                    </div>
                </div>
                <div className="edit-modal-row">
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Date : </div>
                        <input className="edit-modal-input" value={this.state.date} onChange={e => this.onInputChange("date", e)}/>
                    </div>
                </div>
                <div className="edit-modal-row" style={{justifyContent: 'center'}}>
                    <button className="edit-modal-confirm" onClick={() => this.editComputer()}>Confirm</button>
                </div>
            </div>
        )
    }

}

export default EditOtherModal