import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FilterToggle from './FilterToggle';
import { filtersAlcohol, filtersDrinkType, filtersIngredients } from './Filters';


function FilterSection() {

    const [activeFilters, setActiveFilters] = useState([]);

    function toggleFilter(filter) {
        console.log("toggle " + filter);

        let pos = -1;
        const newActiveFilters = activeFilters.filter((element, index) => {
            if (element != filter) {
                return true;
            } else {
                pos = index;
                return false;
            }
        });

        if (pos === -1) {
            newActiveFilters.push(filter);
        }

        setActiveFilters(newActiveFilters);

    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div id='Section-Filter' className='section'>
            <div className="sectionHeader container">
                <div className="sectionIcon clickable" onClick={handleShow}>
                    <span className="material-icons-outlined">filter_list</span>
                </div>
                <h1 className="sectionTitle">Active Filters</h1>
            </div>
            </div>

            <Modal show={show} onHide={handleClose} className="filterModal">
                <Modal.Header closeButton>
                    <Modal.Title>Filters</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Alcohol</h2>
                    {
                        filtersAlcohol.map((element, index) => {
                            let checked = activeFilters.includes(element);
                            return (
                                <FilterToggle key={index} id={element + index} filter={element} toggleCallback={() => { toggleFilter(element) }} checked={checked} />
                            );
                        })
                    }
                    <h2>Type of drink</h2>
                    {
                        filtersDrinkType.map((element, index) => {
                            let checked = activeFilters.includes(element);
                            return (
                                <FilterToggle key={index} id={element + index} filter={element} toggleCallback={() => { toggleFilter(element) }} checked={checked} />
                            );
                        })
                    }
                    <h2>Ingredients</h2>
                    {
                        filtersIngredients.map((element, index) => {
                            let checked = activeFilters.includes(element);
                            return (
                                <FilterToggle key={index} id={element + index} filter={element} toggleCallback={() => { toggleFilter(element) }} checked={checked} />
                            );
                        })
                    }
                </Modal.Body>
                <Modal.Footer style={{justifyContent:"center"}}>
                    <Button variant="primary" style={{
                        color:"#fff",
                        fontWeight: "600",
                        backgroundColor:"#000",
                        border:"none",
                        borderRadius:"100px",
                        padding:"10px 30px"
                    }} onClick={handleClose}>
                        Done
                    </Button>
                    <Button variant="link" style={{color:"#000"}} onClick={()=>{setActiveFilters([])}}>
                        Clear
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FilterSection;