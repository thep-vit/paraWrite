import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';


const Dashboard = ({getCurrentProfile, auth:{user}, profile:{profile, loading}}) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);


    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className = 'lead'>
            <i className= 'fas fa-user'></i> Welcome {user && user.name}
        </p>
        <Fragment>
            <h1 className='large text-primary'>Judging Criteria</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis nunc in magna aliquam viverra sollicitudin viverra felis. Nam iaculis, nibh iaculis imperdiet ornare, erat est vehicula mauris, eu auctor urna sapien in tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum convallis laoreet nunc, sed lobortis purus egestas a. Duis finibus nunc et mauris eleifend, eu cursus libero finibus. Donec mollis neque sit amet tortor pellentesque, vitae vulputate ante rutrum. Proin at eros congue, egestas ligula ut, volutpat enim. In odio augue, vulputate sit amet augue in, auctor lobortis nisi.

Pellentesque posuere malesuada lorem. Proin porta lectus sed pharetra fringilla. Nam quis ullamcorper urna, sit amet commodo nibh. Phasellus ac dictum eros. In hac habitasse platea dictumst. Vestibulum laoreet metus lacus, ut porttitor sapien dapibus et. Fusce euismod mi et lacus ultricies, nec malesuada libero ultricies.

In diam sapien, mattis at rhoncus id, sodales quis erat. Mauris tempor quam id tortor volutpat vestibulum. Vivamus nec lacinia elit, gravida porta ipsum. Sed et pharetra tortor, nec eleifend libero. Nam rhoncus malesuada nibh vitae iaculis. Aliquam non nulla non ante viverra tincidunt. Phasellus hendrerit, lectus vel posuere feugiat, diam ante congue enim, eu pharetra nulla sapien nec arcu. Cras dignissim a ex et lacinia. Vestibulum et varius ipsum. Phasellus id ante id nibh eleifend finibus nec sed risus. Fusce elementum orci sit amet tempus accumsan. Sed tincidunt purus eget interdum sollicitudin. Maecenas quis dui gravida, mollis sapien vitae, auctor mauris. Mauris varius nibh aliquam urna pharetra, nec efficitur sapien faucibus.</p>
        </Fragment>
    </Fragment>
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile})(Dashboard);
