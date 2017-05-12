import React from 'react';
import { Section, SectionHeader } from '../sections';
import { Screen, Wrap } from '../screens';


const SectionFirst = ({href, id, title}) => {
  return (
    <Section>
      <Screen style={{minHeight: 'calc(100vh - 125px)'}}>
        <Wrap>
          <SectionHeader title={title} href={href} id={id}/>
          <div style={{textAlign: 'center'}}>
            Tiramisu fruitcake chupa chups chocolate bar tootsie roll cake cake marshmallow powder. Cake chocolate bar cotton candy cake. Lollipop cake pastry liquorice. Halvah ice cream marzipan donut tart lollipop pie pastry lemon drops. Cupcake brownie jelly-o donut pie soufflé jelly chocolate biscuit. Tiramisu cookie fruitcake sweet roll sweet sesame snaps tart. Fruitcake tart tootsie roll danish cheesecake candy canes cheesecake.
  Bonbon cheesecake carrot cake muffin lemon drops chocolate bar dessert lollipop sesame snaps. Toffee topping chocolate biscuit. Chocolate bar sugar plum muffin tiramisu lemon drops. Caramels marzipan jelly-o cake cake soufflé oat cake. Liquorice lollipop macaroon cotton candy caramels apple pie jelly beans chupa chups biscuit. Jelly-o oat cake tiramisu chocolate cake marshmallow apple pie jelly-o cake. Dragée bear claw tart wafer bear claw cake. Bonbon cookie carrot cake liquorice lemon drops wafer. Pie caramels brownie sweet roll liquorice. Sesame snaps jelly jelly beans chupa chups caramels lemon drops gingerbread gingerbread jelly.
  Cake marzipan sugar plum. Bear claw chupa chups sesame snaps. Biscuit carrot cake gummies caramels. Gingerbread jelly beans cheesecake gummi bears donut. Gummi bears brownie gingerbread dragée muffin tiramisu pastry. Macaroon ice cream soufflé powder macaroon dragée halvah.
  Lollipop apple pie lemon drops candy jelly-o jelly-o jujubes. Cookie icing croissant. Soufflé chocolate cake chocolate. Candy canes tart jelly sugar plum biscuit. Cookie ice cream cotton candy dragée sesame snaps gummi bears muffin. Powder candy canes soufflé dragée carrot cake gingerbread lollipop lollipop. Dessert chocolate cheesecake donut donut fruitcake jelly beans dessert cake. Tootsie roll topping sweet roll chocolate bar sesame snaps halvah cookie toffee. Dessert tiramisu sugar plum. Chocolate cake macaroon dragée sweet marshmallow.
  Cheesecake marzipan bonbon lollipop chocolate cake croissant halvah gummies cupcake. Dessert jelly lemon drops halvah marzipan. Sweet roll sweet roll bonbon toffee jelly beans jujubes tiramisu marzipan. Oat cake jelly-o oat cake gummies carrot cake tiramisu. Gummies chupa chups cake brownie gingerbread gummi bears macaroon gummies. Chupa chups chocolate bar jelly beans gingerbread bonbon donut.
          </div>
        </Wrap>
      </Screen>
    </Section>
  );
};

export default SectionFirst;