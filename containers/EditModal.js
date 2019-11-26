import React, { Component } from 'react';
import axios from 'axios'
import '../css/EditModal.css'
import '../assets/fonts/fontface.css'
import { convertArrayToCSV } from 'convert-array-to-csv';
import Modal from 'react-modal';

class EditModal extends Component {

    state = {
        id: this.props.edit._id,
        location: this.props.edit.location,
        name: this.props.edit.name,
        owner: this.props.edit.owner,
        type: this.props.edit.type,
        department: this.props.edit.department,
        brand: this.props.edit.brand,
        servicetag: this.props.edit.servicetag,
        processor: this.props.edit.processor,
        ram: this.props.edit.ram,
        cpu: this.props.edit.cpu,
        hdd: this.props.edit.hdd,
        os: this.props.edit.os,
        macwifi: this.props.edit.macwifi,
        maclan: this.props.edit.maclan,
        windowsid: this.props.edit.windowsid,
        serial: this.props.edit.serial,
        screen: this.props.edit.screen,
        screenserial: this.props.edit.screenserial,
        warranty: this.props.edit.warranty,
        date: this.props.edit.date
    }

    async editComputer(){
        await axios.put(route+"computer/" + this.state.id,{
            location: this.state.location,
            name: this.state.name,
            owner: this.state.owner,
            type: this.state.type,
            department: this.state.department,
            brand: this.state.brand,
            servicetag: this.state.servicetag,
            processor: this.state.processor,
            ram: this.state.ram,
            cpu: this.state.cpu,
            hdd: this.state.hdd,
            os: this.state.os,
            macwifi: this.state.macwifi,
            maclan: this.state.maclan,
            windowsid: this.state.windowsid,
            serial: this.state.serial,
            screen: this.state.screen,
            screenserial: this.state.screenserial,
            warranty: this.state.warranty,
            date: this.state.date
        }).catch(error => console.log(error))
        location.reload()
    }

    onInputChange(key, e) {
        if (key == "location")
            this.setState({ location: e.target.value })
        if (key == "name")
            this.setState({ name: e.target.value })
        if (key == "owner")
            this.setState({ owner: e.target.value })
        if (key == "type")
            this.setState({ type: e.target.value })
        if (key == "department")
            this.setState({ department: e.target.value })
        if (key == "brand")
            this.setState({ brand: e.target.value })
        if (key == "servicetag")
            this.setState({ servicetag: e.target.value })
        if (key == "processor")
            this.setState({ processor: e.target.value })
        if (key == "ram")
            this.setState({ ram: e.target.value })
        if (key == "cpu")
            this.setState({ cpu: e.target.value })
        if (key == "hdd")
            this.setState({ hdd: e.target.value })
        if (key == "os")
            this.setState({ os: e.target.value })
        if (key == "macwifi")
            this.setState({ macwifi: e.target.value })
        if (key == "maclan")
            this.setState({ maclan: e.target.value })
        if (key == "windowsid")
            this.setState({ windowsid: e.target.value })
        if (key == "serial")
            this.setState({ serial: e.target.value })
        if (key == "screen")
            this.setState({ screen: e.target.value })
        if (key == "screenserial")
            this.setState({ screenserial: e.target.value })
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
                        <div className="edit-modal-header">Location : </div>
                        <input className="edit-modal-input" value={this.state.location} onChange={e => this.onInputChange("location", e)}/>
                    </div>
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Name : </div>
                        <input className="edit-modal-input" value={this.state.name} onChange={e => this.onInputChange("name", e)}/>
                    </div>
                </div>
                <div className="edit-modal-row">
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Owner : </div>
                        <input className="edit-modal-input" value={this.state.owner} onChange={e => this.onInputChange("owner", e)}/>
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
                        <div className="edit-modal-header">Service Tag : </div>
                        <input className="edit-modal-input" value={this.state.servicetag} onChange={e => this.onInputChange("servicetag", e)}/>
                    </div>
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Processor : </div>
                        <input className="edit-modal-input" value={this.state.processor} onChange={e => this.onInputChange("processor", e)}/>
                    </div>
                </div>
                <div className="edit-modal-row">
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Ram : </div>
                        <input className="edit-modal-input" value={this.state.ram} onChange={e => this.onInputChange("ram", e)}/>
                    </div>
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">CPU : </div>
                        <input className="edit-modal-input" value={this.state.cpu} onChange={e => this.onInputChange("cpu", e)}/>
                    </div>
                </div>
                <div className="edit-modal-row">
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">HDD : </div>
                        <input className="edit-modal-input" value={this.state.hdd} onChange={e => this.onInputChange("hdd", e)}/>
                    </div>
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">OS : </div>
                        <input className="edit-modal-input" value={this.state.os} onChange={e => this.onInputChange("os", e)}/>
                    </div>
                </div>
                <div className="edit-modal-row">
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Mac Wifi : </div>
                        <input className="edit-modal-input" value={this.state.macwifi} onChange={e => this.onInputChange("macwifi", e)}/>
                    </div>
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Mac Lan : </div>
                        <input className="edit-modal-input" value={this.state.maclan} onChange={e => this.onInputChange("maclan", e)}/>
                    </div>
                </div>
                <div className="edit-modal-row">
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Windows ID : </div>
                        <input className="edit-modal-input" value={this.state.windowsid} onChange={e => this.onInputChange("windowsid", e)}/>
                    </div>
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Serial : </div>
                        <input className="edit-modal-input" value={this.state.serial} onChange={e => this.onInputChange("serial", e)}/>
                    </div>
                </div>
                <div className="edit-modal-row">
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Screen: </div>
                        <input className="edit-modal-input" value={this.state.screen} onChange={e => this.onInputChange("screen", e)}/>
                    </div>
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Screen Serial: </div>
                        <input className="edit-modal-input" value={this.state.screenserial} onChange={e => this.onInputChange("screenserial", e)}/>
                    </div>
                </div>
                <div className="edit-modal-row">
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Warranty: </div>
                        <input className="edit-modal-input" value={this.state.warranty} onChange={e => this.onInputChange("warranty", e)}/>
                    </div>
                    <div className="edit-modal-box">
                        <div className="edit-modal-header">Date: </div>
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

export default EditModal