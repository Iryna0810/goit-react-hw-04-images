import { Header, FormWrapper, Button, StyledInput } from "components/styled";
import PropTypes from "prop-types";
import { useState } from "react";

export const Searchbar = (handleSearch) => {
    const [value, setValue] = useState('');
    
    const handleSearchChange = (event) => {
        setValue(event.target.value.toLowerCase())
    }
    
    const handleSubmit = event => {
            event.preventDefault();
            handleSearch(value);
            setValue('');
        }


        return (
            <Header className="searchbar">
                <FormWrapper  onSubmit={() => handleSubmit()} role='search' className="form">
                    <Button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </Button>
                    <StyledInput
                        type="text"
                        className="input"
                        autoComplete="off"
                        autoocus="true"
                        placeholder="Search images and photos"
                        onChange={handleSearchChange}
                        value={value}
                    />
                </FormWrapper>
            </Header>
        )
};

Searchbar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};
//     state = {
//         value: '',
//     };

//     handleSearchChange = event => {
//         this.setState({ value: event.target.value.toLowerCase() });  
//     }

//     handleSubmit = event => {
//         event.preventDefault();
//         this.props.handleSearch(this.state.value);
//         this.setState({
//             value: '',
//         });
//     }

//     render() {
//         return (
//             <Header className="searchbar">
//                 <FormWrapper  onSubmit={this.handleSubmit} role='search' className="form">
//                     <Button type="submit" className="button">
//                         <span className="button-label">Search</span>
//                     </Button>
//                     <StyledInput
//                         type="text"
//                         className="input"
//                         autoComplete="off"
//                         autoocus="true"
//                         placeholder="Search images and photos"
//                         onChange={this.handleSearchChange}
//                         value={this.state.value}
//                     />
//                 </FormWrapper>
//             </Header>
//         )
//     }
// };