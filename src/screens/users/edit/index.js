import React, { Fragment } from 'react';
import { Column, Section, Title, Container, Card, Button } from 'rbx';
import '../../../styles/users.scss';
import HeaderLogged from '../../../components/header_logged';

const UserEditScreen = () => (
    <Fragment>
        <HeaderLogged />
        <Section size="medium" className="users">
            <Container>
                <Column.Group centered className="users-edit">
                    <Column size={4}>
                        <Title size={5} className="has-text-grey has-text-left">
                            Informações Pessoais
                        </Title>
                        <Card>
                            <Card.Content>
                                Users Edit Form...
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>

                <Column.Group centered className="users-edit">
                    <Column size={4}>
                        <Title size={5} className="has-text-grey has-text-left">
                            Password
                        </Title>
                        <Card>
                            <Card.Content>
                                Users Edit Form...
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
                <Column.Group centered>
                    <Column size={4} className="has-text-right">
                        Users Delete button
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);

export default UserEditScreen;
