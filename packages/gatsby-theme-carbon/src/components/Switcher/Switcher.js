import React, { useContext } from 'react';
import cx from 'classnames';
import NavContext from '../../util/context/NavContext';
import { nav, open, divider, link, linkDisabled } from './Switcher.module.scss';

const Switcher = ({ children }) => {
  const { switcherIsOpen } = useContext(NavContext);

  return (
    <nav
      className={cx(nav, { [open]: switcherIsOpen })}
      aria-label="IBM Design ecosystem navigation"
      aria-expanded={switcherIsOpen}
      id="switcher-navigation"
    >
      <ul hidden={!switcherIsOpen} aria-labelledby="switcher-navigation">
        {children}
      </ul>
    </nav>
  );
};

export const SwitcherDivider = props => (
  <li className={divider}>
    <span {...props} />
  </li>
);

export const SwitcherLink = ({
  disabled,
  children,
  href: hrefProp,
  ...rest
}) => {
  const href = disabled || !hrefProp ? undefined : hrefProp;
  const className = disabled ? linkDisabled : link;

  return (
    <li>
      <a
        aria-disabled={disabled}
        role="button"
        className={className}
        href={href}
        {...rest}
      >
        {children}
      </a>
    </li>
  );
};

const DefaultChildren = () => (
  <>
    <SwitcherLink href="https://ibm.com/design">IBM Design</SwitcherLink>
    <SwitcherLink href="https://ibm.com/design/language">
      IBM Design Language
    </SwitcherLink>
    <SwitcherLink href="https://ibm.com/brand">IBM Brand Center</SwitcherLink>
    <SwitcherDivider>Design disciplines</SwitcherDivider>
    <SwitcherLink href="https://www.carbondesignsystem.com/">
      Product
    </SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/standards/web/">
      Digital
    </SwitcherLink>
    <SwitcherLink disabled>Events</SwitcherLink>
    <SwitcherDivider>Design practices</SwitcherDivider>
    <SwitcherLink href="https://www.ibm.com/design/thinking/">
      IBM Enterprise Design Thinking
    </SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/design/research/">
      IBM Design Research
    </SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/design/ai">
      IBM Design for AI
    </SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/services/ibmix/">
      IBM iX
    </SwitcherLink>
  </>
);

Switcher.defaultProps = {
  children: <DefaultChildren />,
};

export default Switcher;
