import React from 'react';
import {
  SideCover,
  SideList,
  SideLink,
  SideIcon,
  AccounMenuContainer,
  SideUser,
} from './sidebar.styles';

import {
  PostTest,
  PostImageContainer,
  PostImage,
  PostIcons,
  PostCardIcon,
} from '../Postcard/postcard.styles';
import TwitterButton from '../Button/button.components';
import { dropdown } from '../../utils/Icons';
import { useState } from 'react';
import Modal from '../Modal/modal.components';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';
import DropDown from '../Dropdown/dropdown.components';
import { BackDrop } from '../Modal/modal.styles';

const SideBar = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsShowing(true);
  };

  const closeModalHandler = () => {
    setIsShowing(false);
  };

  const currentUser = useSelector((state) => selectCurrentUser(state));

  const Links = [
    {
      id: 1,
      icon:
        'M 22.46 7.57 L 12.357 2.115 c -0.223 -0.12 -0.49 -0.12 -0.713 0 L 1.543 7.57 c -0.364 0.197 -0.5 0.652 -0.303 1.017 c 0.135 0.25 0.394 0.393 0.66 0.393 c 0.12 0 0.243 -0.03 0.356 -0.09 l 0.815 -0.44 L 4.7 19.963 c 0.214 1.215 1.308 2.062 2.658 2.062 h 9.282 c 1.352 0 2.445 -0.848 2.663 -2.087 l 1.626 -11.49 l 0.818 0.442 c 0.364 0.193 0.82 0.06 1.017 -0.304 c 0.196 -0.363 0.06 -0.818 -0.304 -1.016 Z m -4.638 12.133 c -0.107 0.606 -0.703 0.822 -1.18 0.822 H 7.36 c -0.48 0 -1.075 -0.216 -1.178 -0.798 L 4.48 7.69 L 12 3.628 l 7.522 4.06 l -1.7 12.015 Z',
      title: 'Home',
    },
    {
      id: 2,
      icon:
        'M 21 7.337 h -3.93 l 0.372 -4.272 c 0.036 -0.412 -0.27 -0.775 -0.682 -0.812 c -0.417 -0.03 -0.776 0.27 -0.812 0.683 l -0.383 4.4 h -6.32 l 0.37 -4.27 c 0.037 -0.413 -0.27 -0.776 -0.68 -0.813 c -0.42 -0.03 -0.777 0.27 -0.813 0.683 l -0.382 4.4 H 3.782 c -0.414 0 -0.75 0.337 -0.75 0.75 s 0.336 0.75 0.75 0.75 H 7.61 l -0.55 6.327 H 3 c -0.414 0 -0.75 0.336 -0.75 0.75 s 0.336 0.75 0.75 0.75 h 3.93 l -0.372 4.272 c -0.036 0.412 0.27 0.775 0.682 0.812 l 0.066 0.003 c 0.385 0 0.712 -0.295 0.746 -0.686 l 0.383 -4.4 h 6.32 l -0.37 4.27 c -0.036 0.413 0.27 0.776 0.682 0.813 l 0.066 0.003 c 0.385 0 0.712 -0.295 0.746 -0.686 l 0.382 -4.4 h 3.957 c 0.413 0 0.75 -0.337 0.75 -0.75 s -0.337 -0.75 -0.75 -0.75 H 16.39 l 0.55 -6.327 H 21 c 0.414 0 0.75 -0.336 0.75 -0.75 s -0.336 -0.75 -0.75 -0.75 Z m -6.115 7.826 h -6.32 l 0.55 -6.326 h 6.32 l -0.55 6.326 Z',
      title: 'Explore',
    },
    {
      id: 4,
      icon:
        'M 21.697 16.468 c -0.02 -0.016 -2.14 -1.64 -2.103 -6.03 c 0.02 -2.533 -0.812 -4.782 -2.347 -6.334 c -1.375 -1.393 -3.237 -2.164 -5.242 -2.172 h -0.013 c -2.004 0.008 -3.866 0.78 -5.242 2.172 c -1.534 1.553 -2.367 3.802 -2.346 6.333 c 0.037 4.332 -2.02 5.967 -2.102 6.03 c -0.26 0.194 -0.366 0.53 -0.265 0.838 s 0.39 0.515 0.713 0.515 h 4.494 c 0.1 2.544 2.188 4.587 4.756 4.587 s 4.655 -2.043 4.756 -4.587 h 4.494 c 0.324 0 0.61 -0.208 0.712 -0.515 s -0.005 -0.644 -0.265 -0.837 Z M 12 20.408 c -1.466 0 -2.657 -1.147 -2.756 -2.588 h 5.512 c -0.1 1.44 -1.29 2.587 -2.756 2.587 Z',
      title: 'Notification',
    },
    {
      id: 5,
      icon:
        'M 19.25 3.018 H 4.75 C 3.233 3.018 2 4.252 2 5.77 v 12.495 c 0 1.518 1.233 2.753 2.75 2.753 h 14.5 c 1.517 0 2.75 -1.235 2.75 -2.753 V 5.77 c 0 -1.518 -1.233 -2.752 -2.75 -2.752 Z m -14.5 1.5 h 14.5 c 0.69 0 1.25 0.56 1.25 1.25 v 0.714 l -8.05 5.367 c -0.273 0.18 -0.626 0.182 -0.9 -0.002 L 3.5 6.482 v -0.714 c 0 -0.69 0.56 -1.25 1.25 -1.25 Z m 14.5 14.998 H 4.75 c -0.69 0 -1.25 -0.56 -1.25 -1.25 V 8.24 l 7.24 4.83 c 0.383 0.256 0.822 0.384 1.26 0.384 c 0.44 0 0.877 -0.128 1.26 -0.383 l 7.24 -4.83 v 10.022 c 0 0.69 -0.56 1.25 -1.25 1.25 Z',
      title: 'Messages',
    },
    {
      id: 6,
      icon:
        'M 19.9 23.5 c -0.157 0 -0.312 -0.05 -0.442 -0.144 L 12 17.928 l -7.458 5.43 c -0.228 0.164 -0.53 0.19 -0.782 0.06 c -0.25 -0.127 -0.41 -0.385 -0.41 -0.667 V 5.6 c 0 -1.24 1.01 -2.25 2.25 -2.25 h 12.798 c 1.24 0 2.25 1.01 2.25 2.25 v 17.15 c 0 0.282 -0.158 0.54 -0.41 0.668 c -0.106 0.055 -0.223 0.082 -0.34 0.082 Z M 12 16.25 c 0.155 0 0.31 0.048 0.44 0.144 l 6.71 4.883 V 5.6 c 0 -0.412 -0.337 -0.75 -0.75 -0.75 H 5.6 c -0.413 0 -0.75 0.338 -0.75 0.75 v 15.677 l 6.71 -4.883 c 0.13 -0.096 0.285 -0.144 0.44 -0.144 Z',
      title: 'Bookmarks',
    },
    {
      id: 3,
      icon:
        'M 12 11.816 c 1.355 0 2.872 -0.15 3.84 -1.256 c 0.814 -0.93 1.078 -2.368 0.806 -4.392 c -0.38 -2.825 -2.117 -4.512 -4.646 -4.512 S 7.734 3.343 7.354 6.17 c -0.272 2.022 -0.008 3.46 0.806 4.39 c 0.968 1.107 2.485 1.256 3.84 1.256 Z M 8.84 6.368 c 0.162 -1.2 0.787 -3.212 3.16 -3.212 s 2.998 2.013 3.16 3.212 c 0.207 1.55 0.057 2.627 -0.45 3.205 c -0.455 0.52 -1.266 0.743 -2.71 0.743 s -2.255 -0.223 -2.71 -0.743 c -0.507 -0.578 -0.657 -1.656 -0.45 -3.205 Z m 11.44 12.868 c -0.877 -3.526 -4.282 -5.99 -8.28 -5.99 s -7.403 2.464 -8.28 5.99 c -0.172 0.692 -0.028 1.4 0.395 1.94 c 0.408 0.52 1.04 0.82 1.733 0.82 h 12.304 c 0.693 0 1.325 -0.3 1.733 -0.82 c 0.424 -0.54 0.567 -1.247 0.394 -1.94 Z m -1.576 1.016 c -0.126 0.16 -0.316 0.246 -0.552 0.246 H 5.848 c -0.235 0 -0.426 -0.085 -0.552 -0.246 c -0.137 -0.174 -0.18 -0.412 -0.12 -0.654 c 0.71 -2.855 3.517 -4.85 6.824 -4.85 s 6.114 1.994 6.824 4.85 c 0.06 0.242 0.017 0.48 -0.12 0.654 Z',
      title: 'Profile',
    },
    {
      id: 7,
      icon:
        'M 19.75 2 H 4.25 C 3.013 2 2 3.013 2 4.25 v 15.5 C 2 20.987 3.013 22 4.25 22 h 15.5 c 1.237 0 2.25 -1.013 2.25 -2.25 V 4.25 C 22 3.013 20.987 2 19.75 2 Z M 11 16.75 H 7 c -0.414 0 -0.75 -0.336 -0.75 -0.75 s 0.336 -0.75 0.75 -0.75 h 4 c 0.414 0 0.75 0.336 0.75 0.75 s -0.336 0.75 -0.75 0.75 Z m 6 -4 H 7 c -0.414 0 -0.75 -0.336 -0.75 -0.75 s 0.336 -0.75 0.75 -0.75 h 10 c 0.414 0 0.75 0.336 0.75 0.75 s -0.336 0.75 -0.75 0.75 Z m 0 -4 H 7 c -0.414 0 -0.75 -0.336 -0.75 -0.75 s 0.336 -0.75 0.75 -0.75 h 10 c 0.414 0 0.75 0.336 0.75 0.75 s -0.336 0.75 -0.75 0.75 Z',
      title: 'Lists',
    },
  ];

  return (
    <SideCover>
      {isShowing ? <BackDrop onClick={closeModalHandler}></BackDrop> : null}
      {Links.map((nav, id) => (
        <SideList key={id}>
          <SideIcon viewBox="0 0 24 24">
            <g>
              <path d={nav.icon} />
            </g>
          </SideIcon>
          <SideLink to={nav.title.toLocaleLowerCase()}>{nav.title}</SideLink>
        </SideList>
      ))}
      <div onClick={openModalHandler}>
        <TwitterButton> Tweet </TwitterButton>
        <Modal className="modal" show={isShowing} close={closeModalHandler}>
          Maybe aircrafts fly very high because they don't want to be seen in
          plane sight?
        </Modal>
      </div>
      <AccounMenuContainer>
        <PostTest>
          <PostImageContainer>
            <PostImage
              src="https://www.gstatic.com/tv/thumb/persons/983712/983712_v9_ba.jpg"
              alt="messi"
            />
          </PostImageContainer>
        </PostTest>{' '}
        <SideUser>
          <span>Akinjide ji...</span> <br /> <span>@HazeeJim</span>{' '}
        </SideUser>
        <PostCardIcon onClick={() => setIsOpen(!isOpen)}>
          <PostIcons viewBox="0 0 24 24">
            <g>
              <path d={dropdown}></path>
            </g>
          </PostIcons>
        </PostCardIcon>
      </AccounMenuContainer>
      {isOpen ? <DropDown user={currentUser}></DropDown> : null}
    </SideCover>
  );
};

export default SideBar;
