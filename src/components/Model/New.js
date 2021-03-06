import React, { Component } from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import Branding from 'components/Shared/Branding';
import SideNav from 'components/Shared/SideNav';
import NewForm from 'components/Model/NewForm';


class ModelNew extends Component {

    render() {
        const { t, name, modelNew } = this.props;
        return (
            <div>
                <Branding />
                <Segment>
                    <Grid centered>
                        <Grid.Column width={ 4 }>
                            <SideNav />
                        </Grid.Column>

                        <Grid.Column width={ 12 }>
                            <Header as='h1' text="true">
                                { t('model.new.title') }
                            </Header>

                            <NewForm />

                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}


export default translate('common')(ModelNew)
