import React from 'react';
import { Layout, Header, Navigation, Drawer, Content, FABButton, Icon } from 'react-mdl';

class MDLPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'world'};
    }

    render() {
        return (<div style={{height: '300px', position: 'relative'}}>
            <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                <Header transparent title="Title" style={{color: 'white'}}>
                    <Navigation>
                        <a href="">Link</a>
                        <a href="">Link</a>
                        <a href="">Link</a>
                        <a href="">Link</a>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <a href="">Link</a>
                        <a href="">Link</a>
                        <a href="">Link</a>
                        <a href="">Link</a>
                    </Navigation>
                </Drawer>
                <Content>
{/*
                    <FABButton colored ripple>
                        <Icon name="add" />
                    </FABButton>
*/}
                </Content>
            </Layout>
        </div>);
    }

}

export default MDLPage;