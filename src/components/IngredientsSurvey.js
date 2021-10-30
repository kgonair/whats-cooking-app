import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardHeader, 
  Button,
  Input, Label, Collapse
} from "reactstrap";

class IngredientsSurvey extends Component {
  render() {
    return (
        <div className="col">
          <Card>
            <CardBody>
              <CardTitle>
              <span>Choose Your Ingredients</span>
              </CardTitle>

           

                  
                
                  <Card style={{ marginBottom: '1rem' }}>
                    <CardHeader onClick="{toggle">
                      <Button>
                        Protein
                      </Button>
                    </CardHeader>
                      <Collapse>
                        <htmlForm>
                            <Input type="checkbox" value="beef" id="beef" />
                            <Label htmlFor="diet">
                                Beef
                            </Label>
                            <Input type="checkbox" value="chicken" id="chicken" />
                            <Label htmlFor="diet">
                                Chicken
                            </Label>
                            <Input type="checkbox" value="lamb" id="lamb" />
                            <Label htmlFor="diet">
                                Lamb
                            </Label>
                            <Input type="checkbox" value="turkey" id="turkey" />
                            <Label htmlFor="diet">
                                Turkey
                            </Label>
                        </htmlForm>
                    </Collapse>
                </Card>

                  <Card style={{ marginBottom: '1rem' }}>
                    <CardHeader onClick="{toggle">
                      <Button>
                          Vegetables
                      </Button>
                      </CardHeader>
                      <Collapse>
                      <htmlForm>
                        <Input type="checkbox" value="vegan" id="broccoli" />
                        <Label htmlFor="diet">
                        Broccoli
                        </Label>
                        <Input type="checkbox" value="vegetarian" id="spinach" />
                        <Label htmlFor="diet">
                        Spinach
                        </Label>
                        <Input type="checkbox" value="pescatarian" id="carrot" />
                        <Label htmlFor="diet">
                        Carrot
                        </Label>
                        <Input type="checkbox" value="avocado" id="avocado" />
                        <Label htmlFor="diet">
                        Avocado
                        </Label>
                    </htmlForm>
                    </Collapse>
            </Card>

                  <Card style={{ marginBottom: '1rem' }}>
                  <CardHeader onClick="{toggle">
                      <Button>
                          Grains
                          </Button>
                          </CardHeader>
                          <Collapse>
                          <htmlForm>
                                <Input type="checkbox" value="rice" id="rice" />
                                <Label htmlFor="diet">
                                  Rice
                                </Label>
                                <Input type="checkbox" value="pasta" id="pasta" />
                                <Label htmlFor="diet">
                                  Pasta
                                </Label>
                                <Input type="checkbox" value="quinoa" id="quinoa" />
                                <Label htmlFor="diet">
                                  Quinoa
                                </Label>
                                <Input type="checkbox" value="oats" id="oats" />
                                <Label htmlFor="diet">
                                  Oats
                                </Label>
                            </htmlForm>
                        </Collapse>
                </Card>

      
            </CardBody>
          </Card>
        </div>
    );
  }
}
    
    export default IngredientsSurvey;

       {/* <Card style={{ marginBottom: '1rem' }} key={layout}>
        <CardHeader onClick={this.toggle} data-event={layout.layout} data-type="collapseLayout">{layout.layout_name}</CardHeader>
        <Collapse isOpen={this.state.collapseLayout === layout.layout}>
          <CardBody>
            render release htmlForm {layout.layout_name}
          </CardBody>
        </Collapse>
      </Card> */}

{/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse> */}


//     <Card style={{ marginBottom: '1rem' }}>
//     <Button>
//         Fruits
//         <Button>
//    FRUITS
// <Card style={{ marginBottom: '1rem' }}>
//     <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
//         Herbs/Spices
//     </button>
//     HERBS & SPICES
// <Card style={{ marginBottom: '1rem' }}>
//         <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
//             Beans & Legumes
//         </button>
//         BEANS & LEGUMES
//     <Card style={{ marginBottom: '1rem' }}>
//             <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
//                 Eggs & Dairy
//             </button>
//             EGGS & DAIRY
//         <Card style={{ marginBottom: '1rem' }}>
//             <div class="card-header" id="headingEight">
//                 <h2 class="mb-0">
//                 <Button>
//                     Nuts & Seeds
//                     </Button>
//                 NUTS & SEEDS