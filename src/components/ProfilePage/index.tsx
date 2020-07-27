import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>
        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
            <h1>Arthur Biasibetti</h1>
            <h2>@UmNickAqui</h2>
            <p>
                Interessado em aprender
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Rio Grando do sul, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 26 de dezembro de 2000
                </li>
            </ul>
            <Followage>
                <span>
                    Seguindo <strong>28</strong>
                </span>
                <span>
                    <strong>12 </strong> seguidores
                </span>
            </Followage>
        </ProfileData>
        <Feed />
    </Container>
  );
}

export default ProfilePage;