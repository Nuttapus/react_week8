import React, { Component } from 'react';
import Image from './image';
import Columns from './columns';
import 'bulma/css/bulma.css';
class MyApp extends Component {
    render() {
        return (
            <div>
                <section className="section">

                    <Columns class="columns">
                        <Columns class="column">
                            <Image src={require('./img/VivoV11.jpeg')} alt="VivoV11" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/appleXr.jpg')} alt="IphoneXr" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/iphoneX.png')} alt="IphoneXr" />
                        </Columns>

                    </Columns>
                </section>
            </div>
        );
    }
};

export default MyApp;
