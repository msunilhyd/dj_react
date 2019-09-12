import React from 'react';
import Articles from '../components/Article';
import axios from 'axios';
import { Card, Button } from 'antd';
import CustomForm from '../components/Form';

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                });
                console.log(res.data);
            })
    }


    handleDelete = (event) => {
        console.log("Hello123");

        const articleID = this.props.match.params.articleID;
        console.log("Hello");
        console.log(articleID);
        
        axios.delete(`http://127.0.0.1:8000/api/${articleID}/`);
    }

    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <CustomForm requestType="put" articleID={this.props.match.params.articleID} btnType="Update"/>
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>
        )
    }
}

export default ArticleDetail;