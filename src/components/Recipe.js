import React from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const Recipe = ({ title, image, ingredients }) => {
  return (
  <Container>
    <Row>
      <Col>
        <Card className="text-center border-warning mb-0">
          <CardBody>
            <CardTitle className="text-center">
              <h2>Your Recipes!</h2>
            </CardTitle>
            <CardText class="text-center">
              <h2>{title}</h2>
              <img src={image} alt={title} />
              {ingredients.map(ingredient =>
              (
                <li>{ingredient.text}</li>
              ))}
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

}

export default Recipe;


    //   <React.Fragment>
    //     <div className="container">
    //       <div className="row">
    //         <div className="col">
    //           <Card className="text-center border-warning mb-0">
    //             <CardBody>
    //               <CardTitle className="text-center">
    //                 <span>Your Recipes!</span>
    //               </CardTitle>
    //               <CardText class="text-center">
                    
    //                 {/* <h2>{recipes.title}</h2>
    //                 <h3>{recipes.image}</h3>
    //                 <h3>{recipes.ingredients}</h3>
    //                 <h3>{recipes.details}</h3> */}
    //               </CardText>
    //             </CardBody>
    //           </Card>
    //         </div>
    //       </div>
    //     </div>
    //     );
    //   </React.Fragment>
    // );
// }

