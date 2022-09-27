import axios from "axios";
import withRouter from "../withRouter";
import {CreateProductClass} from "./createProduct";

class UpdateProduct extends CreateProductClass{
    constructor(props){
        super(props)
        this.pageTitle = "Update Product";
        this.submitText = "Update Now";
    }

    state = {
        title:"previous title",
        slug:"privious-title",
        variants:[
            {title:"hello",price:99},
            {title:"geho",price:99},
            {title:"jole",price:99},
            {title:"dole",price:99},
        ],
        loaded:false
    }

    // state = {
    //     title:"",
    //     cover:"",
    //     slug:"",
    //     variants:[],
    //     imgOpen:false,
    //     bkashPrement: false,
    //     nogotPrement: false,
    //     loaded: true
    // }

    componentDidMount(){
        console.log(this.props.router.params.id);
        axios.get(window.apiBaseUrl+"/product-details/"+this.props.router.params.id)
        .then((res)=>{
            // console.log(res.data);
            const {title, slug, cover, variants} = res.data;

            console.log({title, slug, cover, variants});
            this.setState({title, slug, cover, variants, loaded: true})
        }).catch(err=>{
            console.error(err);
        })
    }

}

export default withRouter(UpdateProduct) ;