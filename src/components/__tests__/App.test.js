import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import { MemoryRouter } from 'react-router';
import App from 'components/App';
import UsersList from 'components/UsersList';

it('shows the users list', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <Root>
                <App/>
            </Root>
        </MemoryRouter>
      );
    expect(wrapper.find(UsersList).length).toEqual(1);


    
    wrapper.unmount();
});