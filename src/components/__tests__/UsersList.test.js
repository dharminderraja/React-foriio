import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import { MemoryRouter } from 'react-router';
import UsersList from 'components/UsersList';
import WorkItem from 'components/WorkItem';

const initialState = {users: [
    {
        id: 11805,
        screen_name: 'sasa',
        name: '佐々成美',
        profession: 'デザイナー',
        avatar: '',
        works: [
        {
            id: 26648,
            title: '【架空】建築士の名刺',
            thumbnail: 'https://foriio.imgix.net/store/3f8765a45ceec8a9074f837738b9fefd.png?ixlib=rb-3.1.1&auto=format%2Ccompress&w=688&h=424&fit=crop&s=16f1dee58f95c430371a6ab1cc5e81b9',
            is_nsfw: false
        }
        ]
    },
    {
        id: 11773,
        screen_name: 'yoshidaseiji',
        name: '吉田誠治',
        profession: 'イラストレータ、背景グラフィッカ',
        avatar: 'https://dyci7co52mbcc.cloudfront.net/store/3b4aeebca9c963e3f879fbde31175cb3.png',
        works: [
        {
            id: 28609,
            title: '「ものがたりの家 2」',
            thumbnail: 'https://foriio.imgix.net/store/03d537daa0cfe1f119df65bd29b7abbf.jpg?ixlib=rb-3.1.1&auto=format%2Ccompress&w=688&h=424&fit=crop&s=62cca6eeb6266bb357ea996f5777ffc0',
            is_nsfw: false
        }
        ]
    }
]};

it('shows the users list with workitem', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <Root initialState={initialState}>
                <UsersList/>
            </Root>
        </MemoryRouter>
      );
      
    expect(wrapper.find(WorkItem).length).toEqual(2);
    
    wrapper.unmount();
});