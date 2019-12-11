import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import { MemoryRouter } from 'react-router';
import Profile from 'components/Profile';
import Works from 'components/Works';

const initialState = {
    profile: {
      meta: {
        image: 'https://api.foriio.com/api/v1/users/hirohito/profile/og-image?cache-key=profiles/1-20190706114434572267-users/307-20191210152555554879-20191028105658656450'
      },
      id: 1,
      locale: 'ja',
      bio: 'Founder of foriio. \nBased in Tokyo, Japan.',
      location: 'Tokyo, Japan',
      profession: 'Art director / designer',
      website: 'http://hirohitoyamada.com',
      name: 'Hiro Yamada',
      contact_email: 'hirohito.y@gmail.com',
      instagram_url: '',
      facebook_url: '',
      twitter_url: 'https://twitter.com/hisho1ne',
      avatar: {
        thumb2x: 'https://dyci7co52mbcc.cloudfront.net/store/e0268c5ee25f60a64642b63795cf09ff.jpg',
        thumb: 'https://dyci7co52mbcc.cloudfront.net/store/a156de822d994f325c18f889ae5b92b1.jpg',
        phone: 'https://dyci7co52mbcc.cloudfront.net/store/290501e742cb007281c8970fe7dcf640.jpg'
      },
      i_want_to_work_with: 'クリエイターに向けたサービスを展開している企業と提携・協業したいです！',
      organizations: [
        {
          name: '1ne Studio',
          screen_name: '1ne-studio',
          about: 'We are foriio. We work to empower individual creators.',
          logo: {
            thumb2x: 'https://foriio.imgix.net/store/fb21c8e7b5ffacc58ee783bd20c6915d.png?ixlib=rb-3.1.1&auto=format%2Ccompress&fit=crop&rect=0%2C0%2C0%2C0&w=260&h=260&s=06c9fcb98fc47a684ca6357d6c1a0749',
            thumb: 'https://foriio.imgix.net/store/fb21c8e7b5ffacc58ee783bd20c6915d.png?ixlib=rb-3.1.1&auto=format%2Ccompress&fit=crop&rect=0%2C0%2C0%2C0&w=130&h=130&s=1016502426395fae4a0a59881e7f8e9c',
            phone: 'https://foriio.imgix.net/store/fb21c8e7b5ffacc58ee783bd20c6915d.png?ixlib=rb-3.1.1&auto=format%2Ccompress&fit=crop&rect=0%2C0%2C0%2C0&w=750&h=750&s=abadbb3f7c6accf04b800fff03cbfdc6'
          }
        }
      ],
      favorite_id: '',
      user: {
        id: 307,
        email: 'hirohito.y@gmail.com',
        screen_name: 'hirohito'
      }
    }
  };

it('shows the Profile page with works', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/hirohito' ]}>
            <Root initialState={initialState}>
                <Profile/>
            </Root>
        </MemoryRouter>
      );

    expect(wrapper.find(Works).length).toEqual(1);
    
    wrapper.unmount();
});