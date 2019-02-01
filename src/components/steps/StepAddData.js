import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Header, Segment, Icon, List, Button, } from 'semantic-ui-react';
import StepInformer, { NewModelInstructions } from '../StepInformer';
import FileUpload from '../Fileupload Components/FIleUpload';

export default class StepAddData extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <Header as='h1'><img src="https://github.com/CoEDL/elpis/raw/master/docs/img/elpis.png" className="logo" alt="logo" /></Header>


                <Segment>
                    <Grid centered>
                            <Grid.Column width={6}>
                                <StepInformer instructions={NewModelInstructions} />
                            </Grid.Column>

                            <Grid.Column width={10}>
                                <Header as='h1'> <Icon name='book' />Add Data</Header>
                                <p>Some description and information about file formats, naming requirements etc.</p>

                                {/* <Segment placeholder>
                                    <Header icon>
                                    <Icon name='file audio outline' />
                                    Drag and drop audio and transcription files here
                                    </Header>
                                    <Button primary>Add Document</Button>
                                </Segment> */}
                                <Segment>
                                    <FileUpload />
                                </Segment>

                                <Header as='h1'> Transcription and Audio Files</Header>
                               <Grid>
                                    <Grid.Column width={5}>
                                        <List>
                                            <List.Item>
                                                <List.Icon name='check square'/>
                                                <List.Content>File1.eaf</List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='check square'/>
                                                <List.Content>File2.eaf</List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='check square'/>
                                                <List.Content>File3.eaf</List.Content>
                                            </List.Item>
                                        </List>
                                    </Grid.Column>

                                    <Grid.Column width={5}>
                                    <List>
                                            <List.Item>
                                                <List.Icon name='check square'/>
                                                <List.Content>File1.wav</List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='check square'/>
                                                <List.Content>File2.wav</List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='check square'/>
                                                <List.Content>File3.wav</List.Content>
                                            </List.Item>
                                        </List>
                                    </Grid.Column>
                                </Grid>
                                <Button type='submit' as={Link} to="/data-preparation">Next: process this data (Data input success)</Button>
                                <Button type='submit' as={Link} to="/data-preparation-error">Next: Fix this error (Data input Error)</Button>
                            </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        );
    }
}