import React, { Component } from 'react';
import axios from 'axios'
import '../css/App.css'
import '../assets/fonts/fontface.css'
import '../css/DeleteModal.css'
import { convertArrayToCSV } from 'convert-array-to-csv';
import Modal from 'react-modal';
import ViewModal from './ViewModal';
import EditModal from './EditModal';
import ViewOtherModal from './ViewOtherModal'
import EditOtherModal from './EditOtherModal'
import AddModal from './AddModal'
import AddOtherModal from './AddOtherModal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class App extends Component {

    state = {
        computers: [],
        computers_temp: [],
        owner: "",
        type: "",
        department: "",
        brand: "",
        servicetag: "",
        viewComputer: {},
        addIsOpen: false,
        addOtherIsOpen: false,
        viewIsOpen: false,
        editIsOpen: false,
        viewOtherIsOpen: false,
        editOtherIsOpen: false,
        delIsOpen: false,
        delOtherIsOpen: false,
        delId: "",
        modePC: true,
    }

    componentDidMount() {
        this.getComputer()
    }

    openAddModal() {
        this.setState({ addIsOpen: true })
    }

    afterOpenAddModal() {
    }

    closeAddModal() {
        this.setState({ addIsOpen: false })
    }

    openAddOtherModal() {
        this.setState({ addOtherIsOpen: true })
    }

    afterOpenAddOtherModal() {
    }

    closeAddOtherModal() {
        this.setState({ addOtherIsOpen: false })
    }

    openViewModal() {
        this.setState({ viewIsOpen: true })
    }

    afterOpenViewModal() {
    }

    closeViewModal() {
        this.setState({ viewIsOpen: false })
    }

    openEditModal() {
        this.setState({ editIsOpen: true })
    }

    afterOpenEditModal() {
    }

    closeEditModal() {
        this.setState({ editIsOpen: false })
    }

    openViewOtherModal() {
        this.setState({ viewOtherIsOpen: true })
    }

    afterOpenViewOtherModal() {
    }

    closeViewOtherModal() {
        this.setState({ viewOtherIsOpen: false })
    }

    openEditOtherModal() {
        this.setState({ editOtherIsOpen: true })
    }

    afterOpenEditOtherModal() {
    }

    closeEditOtherModal() {
        this.setState({ editOtherIsOpen: false })
    }

    openDelModal(id) {
        this.setState({ delId: id })
        this.setState({ delIsOpen: true })
    }

    afterOpenDelModal() {
    }

    closeDelModal() {
        this.setState({ delIsOpen: false })
    }

    openDelOtherModal(id) {
        this.setState({ delId: id })
        this.setState({ delIsOpen: true })
    }

    afterOpenDelOtherModal() {
    }

    closeDelOtherModal() {
        this.setState({ delIsOpen: false })
    }

    async getComputer() {
        await axios.get("http://localhost:5000/api/computers/")
            .then(response => {
                this.setState({ computers: response.data.data })
                this.setState({ computers_temp: response.data.data })
                this.setState({ modePC: true })
            }).catch(error => console.log(error))
    }

    async getOther() {
        await axios.get("http://localhost:5000/api/others/")
            .then(response => {
                this.setState({ computers: response.data.data })
                this.setState({ computers_temp: response.data.data })
                this.setState({ modePC: false })
            }).catch(error => console.log(error))
    }

    async viewComputer(id) {
        await axios.get("http://localhost:5000/api/computer/" + id)
            .then(response => {
                this.setState({ viewComputer: response.data.data })
                this.openViewModal()
            }).catch(error => console.log(error))
    }

    async editComputer(id) {
        await axios.get("http://localhost:5000/api/computer/" + id)
            .then(response => {
                this.setState({ viewComputer: response.data.data })
                this.openEditModal()
            }).catch(error => console.log(error))
    }

    async viewOther(id) {
        await axios.get("http://localhost:5000/api/other/" + id)
            .then(response => {
                this.setState({ viewComputer: response.data.data })
                this.openViewOtherModal()
            }).catch(error => console.log(error))
    }

    async editOther(id) {
        await axios.get("http://localhost:5000/api/other/" + id)
            .then(response => {
                this.setState({ viewComputer: response.data.data })
                this.openEditOtherModal()
            }).catch(error => console.log(error))
    }

    async deleteComputer(id) {
        await axios.delete("http://localhost:5000/api/computer/" + id)
            .then(response => {
                this.closeDelModal()
                location.reload()
            }).catch(error => console.log(error))
    }

    async deleteOther(id) {
        await axios.delete("http://localhost:5000/api/other/" + id)
            .then(response => {
                this.closeDelOtherModal()
                location.reload()
            }).catch(error => console.log(error))
    }

    onInputChange(key, e) {
        if (key == "owner")
            this.setState({ owner: e.target.value }, () => this.onChangeSearch())
        if (key == "type")
            this.setState({ type: e.target.value }, () => this.onChangeSearch())
        if (key == "department")
            this.setState({ department: e.target.value }, () => this.onChangeSearch())
        if (key == "brand")
            this.setState({ brand: e.target.value }, () => this.onChangeSearch())
        if (key == "servicetag")
            this.setState({ servicetag: e.target.value }, () => this.onChangeSearch())
    }

    onChangeSearch() {
        const filter_list = []
        const asset_list = this.state.computers_temp;
        console.log("list: ", asset_list[0].owner," state: ",this.state.owner)
        for (let i = 0; i < asset_list.length; i++) {
            if (asset_list[i].owner.toLowerCase().match(this.state.owner.toLowerCase()) || this.state.owner.length <= 0)
                if (asset_list[i].type.toLowerCase().match(this.state.type.toLowerCase()) || this.state.type.length <= 0)
                    if (asset_list[i].department.toLowerCase().match(this.state.department.toLowerCase()) || this.state.department.length <= 0)
                        if (asset_list[i].brand.toLowerCase().match(this.state.brand.toLowerCase()) || this.state.brand.length <= 0)
                            if (asset_list[i].servicetag.toLowerCase().match(this.state.servicetag.toLowerCase()) || this.state.servicetag.length <= 0)
                                filter_list.push(asset_list[i])
        }
        this.setState({ computers: filter_list })
    }

    renderButton(data) {
        if (this.state.modePC == true) {
            return (
                <div className="app-table-row-group">
                    <button className="app-table-row-button" onClick={() => this.viewComputer(data._id)}>View</button>
                    <button className="app-table-row-button" onClick={() => this.editComputer(data._id)}>Edit</button>
                    <button className="app-table-row-button" onClick={() => this.openDelModal(data._id)}>Del</button>
                </div>
            )
        }
        if (this.state.modePC == false) {
            return (
                <div className="app-table-row-group">
                    <button className="app-table-row-button" onClick={() => this.viewOther(data._id)}>View</button>
                    <button className="app-table-row-button" onClick={() => this.editOther(data._id)}>Edit</button>
                    <button className="app-table-row-button" onClick={() => this.openDelOtherModal(data._id)}>Del</button>
                </div>
            )
        }
    }

    renderContent() {
        return this.state.computers.map(data => {
            return (
                <div className="app-table-row">
                    <div className="app-table-row-text">{data.location}</div>
                    <div className="app-table-row-text">{data.name}</div>
                    <div className="app-table-row-text">{data.owner}</div>
                    <div className="app-table-row-text">{data.type}</div>
                    <div className="app-table-row-text">{data.department}</div>
                    <div className="app-table-row-text">{data.brand}</div>
                    <div className="app-table-row-text">{data.servicetag}</div>
                    <div className="app-table-row-text">{data.warranty}</div>
                    <div className="app-table-row-text">{data.date}</div>
                    {this.renderButton(data)}
                </div>
            )
        })
    }

    render() {
        return (
            <div className="app-container">
                <div className="app-banner">
                    <div className="app-banner-text">Assets Manager</div>
                    <div className="app-banner-switch">
                        <button className="app-banner-button" onClick={() => this.getComputer()}>Show Computer</button>
                        <button className="app-banner-button" onClick={() => this.getOther()}>Show Others</button>
                    </div>
                    <div className="app-banner-switch">
                        <button className="app-banner-button" onClick={() => this.openAddModal()}>Add Computer</button>
                        <button className="app-banner-button" onClick={() => this.openAddOtherModal()}>Add Others</button>
                    </div>
                </div>
                <div className="app-search-row">
                    <div className="app-search-box">
                        <div className="app-search-header">Owner</div>
                        <input className="app-search-input" value={this.state.owner} onChange={e => this.onInputChange("owner", e)} />
                    </div>
                    <div className="app-search-box">
                        <div className="app-search-header">Type</div>
                        <input className="app-search-input" value={this.state.type} onChange={e => this.onInputChange("type", e)} />
                    </div>
                    <div className="app-search-box">
                        <div className="app-search-header">Department</div>
                        <input className="app-search-input" value={this.state.department} onChange={e => this.onInputChange("department", e)} />
                    </div>
                    <div className="app-search-box">
                        <div className="app-search-header">Brand</div>
                        <input className="app-search-input" value={this.state.Brand} onChange={e => this.onInputChange("brand", e)} />
                    </div>
                    <div className="app-search-box">
                        <div className="app-search-header">Service Tag</div>
                        <input className="app-search-input" value={this.state.servicetag} onChange={e => this.onInputChange("servicetag", e)} />
                    </div>
                </div>
                <div className="app-content">
                    <div className="app-table">
                        <div className="app-table-header">
                            <div className="app-table-header-text">Location</div>
                            <div className="app-table-header-text">Name</div>
                            <div className="app-table-header-text">Owner</div>
                            <div className="app-table-header-text">Type</div>
                            <div className="app-table-header-text">Department</div>
                            <div className="app-table-header-text">Brand</div>
                            <div className="app-table-header-text">Service Tag</div>
                            <div className="app-table-header-text">Warranty</div>
                            <div className="app-table-header-text">Date</div>
                            <div className="app-table-header-text">View/Edit/Delete</div>
                        </div>
                        {this.renderContent()}
                    </div>
                </div>
                <Modal
                    isOpen={this.state.addIsOpen}
                    onAfterOpen={() => this.afterOpenAddModal()}
                    onRequestClose={() => this.closeAddModal()}
                    contentLabel="Add"
                    style={customStyles}
                >
                    <AddModal/>
                </Modal>
                <Modal
                    isOpen={this.state.addOtherIsOpen}
                    onAfterOpen={() => this.afterOpenAddModal()}
                    onRequestClose={() => this.closeAddModal()}
                    contentLabel="Add"
                    style={customStyles}
                >
                    <AddOtherModal/>
                </Modal>
                <Modal
                    isOpen={this.state.viewIsOpen}
                    onAfterOpen={() => this.afterOpenViewModal()}
                    onRequestClose={() => this.closeViewModal()}
                    contentLabel="View"
                    style={customStyles}
                >
                    <ViewModal
                        view={this.state.viewComputer}
                    />
                </Modal>
                <Modal
                    isOpen={this.state.editIsOpen}
                    onAfterOpen={() => this.afterOpenEditModal()}
                    onRequestClose={() => this.closeEditModal()}
                    contentLabel="Edit"
                    style={customStyles}
                >
                    <EditModal
                        edit={this.state.viewComputer}
                    />
                </Modal>
                <Modal
                    isOpen={this.state.viewOtherIsOpen}
                    onAfterOpen={() => this.afterOpenViewOtherModal()}
                    onRequestClose={() => this.closeViewOtherModal()}
                    contentLabel="View"
                    style={customStyles}
                >
                    <ViewOtherModal
                        view={this.state.viewComputer}
                    />
                </Modal>
                <Modal
                    isOpen={this.state.editOtherIsOpen}
                    onAfterOpen={() => this.afterOpenEditOtherModal()}
                    onRequestClose={() => this.closeEditOtherModal()}
                    contentLabel="Edit"
                    style={customStyles}
                >
                    <EditOtherModal
                        edit={this.state.viewComputer}
                    />
                </Modal>
                <Modal
                    isOpen={this.state.delIsOpen}
                    onAfterOpen={() => this.afterOpenDelModal()}
                    onRequestClose={() => this.closeDelModal()}
                    contentLabel="Delete"
                    style={customStyles}
                >
                    <div className="delete-text">Are you sure you want to delete?</div>
                    <div className="delete-button-row">
                        <button className="delete-confirm-button" onClick={() => this.deleteComputer(this.state.delId)}>Delete</button>
                        <button className="delete-cancel-button" onClick={() => this.closeDelModal()}>Cancel</button>
                    </div>
                </Modal>
                <Modal
                    isOpen={this.state.delOtherIsOpen}
                    onAfterOpen={() => this.afterOpenDelOtherModal()}
                    onRequestClose={() => this.closeDelOtherModal()}
                    contentLabel="Delete"
                    style={customStyles}
                >
                    <div className="delete-text">Are you sure you want to delete?</div>
                    <div className="delete-button-row">
                        <button className="delete-confirm-button" onClick={() => this.deleteOther(this.state.delId)}>Delete</button>
                        <button className="delete-cancel-button" onClick={() => this.closeDelOtherModal()}>Cancel</button>
                    </div>
                </Modal>
            </div>
        )
    }

}

export default App