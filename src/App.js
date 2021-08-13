import './App.css';
import ComponentC from './components/context/ComponentC';
import { UserProvider } from './components/context/UsereContext';
// import ClickCounter from './components/render_props/ClickCounter';
// import Counter from './components/render_props/Counter';
//import Counter from './components/render_props/Counter';
// import HoverCounter from './components/render_props/HoverCounter';
// import User from './components/render_props/User';
//import ClickCounter from './components/higher_order/ClickCounter';
//import HoverCounter from './components/higher_order/HoverCounter';
//import ErrorBoundry from './components/errors/ErrorBoundry';
//import Hero from './components/errors/Hero';
//import PortalDemo from './components/portals/PortalDemo';
//import ForwardRefInputParent from './components/refs/ForwardRefInputParent';
//import ParentComp from './components/memo/ParentComp';
//import FocusInput from './components/refs/FocusInput';
//import RefDemo from './components/refs/RefDemo';
//import ParentComp from './components/pure/ParentComp';
//import PureComp from './components/pure/PureComp';
//import FragmentDemo from './components/fragments/FragmentDemo';
//import LifeCycleUpdate from './components/lifecycle/LifeCycleUpdate';
//import Form from './components/forms/Form';
//import LifeCycle from './components/lifecycle/LifeCycle';
//import StyleSheetModule from './components/style/StyleSheetModule';
//import InLineStyle from './components/style/InLineStyle';
//import StyleSheet from './components/style/StyleSheet';
//import UserGreeting from './components/conditional/UserGreeting';
// import NameList from './components/list/NameList';
// import PersonList from './components/list/PersonList';
//import ParentComponent from './components/ParentComponent';
//import EventBind from './components/EventBind';
//import ClassClick from './components/ClassClick';
//import FunctionClick from './components/FunctionClick';
//import Counter from './components/Counter';
// import {Greet} from './components/Greet';
//import Welcome from './components/Welcome'
//import { Hello } from './components/Hello';
//import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <ComponentC />{/* without provider context it displays default context*/}
      <UserProvider value='K Perarivalan'>
        <ComponentC />
      </UserProvider>
      {/* <Counter>{(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />}</Counter>
      <Counter>{(count, incrementCount) => <HoverCounter count={count} incrementCount={incrementCount} />}</Counter> */}
      {/* <ClickCounter />
      <HoverCounter />
      <User render={ (isLoggedIn) => isLoggedIn ? 'Kamarajar':'Guest' } /> */}
      {/* <ClickCounter name='K.V.Jeganathan'/> //Higer Order components
      <HoverCounter /> */}
      {/* <ErrorBoundry>
        <Hero heroName='Aathi'/>
        </ErrorBoundry>
        <ErrorBoundry>
        <Hero heroName='Surya'/>
        </ErrorBoundry>
        <ErrorBoundry>
        <Hero heroName='Joker'/>
      </ErrorBoundry> */}
      {/* <PortalDemo /> */}
      {/* <ForwardRefInputParent /> */}
      {/* <FocusInput /> */}
      {/* <RefDemo /> */}
      {/* <ParentComp /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleUpdate /> */}
      {/* <LifeCycle /> */}
      {/* <Form /> */}
      {/* <StyleSheetModule />
      <InLineStyle /> */}
      {/* <StyleSheet /> */}
      {/* <NameList></NameList>
      <PersonList /> */}
      {/*<UserGreeting />
      <ParentComponent />
      <EventBind />
      <FunctionClick />
      <ClassClick />
      <Hello name='Thiru Valluvar'><p>Thiru Valluvar is one of the best poet in the world!</p></Hello>
      <Welcome name='Thiru Valluvar'><p>Thiru Valluvar is one of the best poet in the world!</p></Welcome>
      <Counter />
      <Message />
      <Greet />
      <Welcome /> 
      <Hello name='Thiru Valluvar'><p>Thiru Valluvar is one of the best poet in the world!</p></Hello>
      <Hello name='Kamban'/>
      <Hello name='Bharathi'/>
      <Welcome name='Thiru Valluvar'><p>Thiru Valluvar is one of the best poet in the world!</p></Welcome>
      <Welcome name='Kamban'/>
      <Welcome name='Bharathi'/>*/}
    </div>
  );
}

export default App;
