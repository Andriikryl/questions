import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import Link from "next/link";

export default function Contant() {
  return (
    <section>
      <Container>
        <div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Data types in JavaScript?</h3>
            <p>The Undefined Type</p>
            <p>The Null Type</p>
            <p>The Boolean Type</p>
            <p>The String Type</p>
            <p>The Symbol Type</p>
            <p>Numeric Types</p>
            <p>The Number Type</p>
            <p>The BigInt Type</p>
            <p>The Object Type</p>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>IsLooselyEqual (==)</h3>
            <p>
              The abstract operation IsLooselyEqual takes arguments x (an
              ECMAScript language value) and y (an ECMAScript language value)
              and returns either a normal completion containing a Boolean or a
              throw completion. It provides the semantics for the == operator.
              It performs the following steps when called:
            </p>
            <ol>
              <li>
                If Type(x) is Type(y), then a. Return IsStrictlyEqual(x, y).
              </li>
              <li> If x is null and y is undefined, return true.</li>
              <li> If x is undefined and y is null, return true.</li>
              <li> NOTE: This step is replaced in section B.3.6.2.</li>
              <li>
                If x is a Number and y is a String, return ! IsLooselyEqual(x, !
                ToNumber(y)).
              </li>
              <li>
                If x is a String and y is a Number, return ! IsLooselyEqual(!
                ToNumber(x), y).
              </li>
              <li>
                {" "}
                If x is a BigInt and y is a String, then
                <ul>
                  <li>a. Let n be StringToBigInt(y).</li>
                  <li>b. If n is undefined, return false.</li>
                  <li>c. Return ! IsLooselyEqual(x, n).</li>
                </ul>
              </li>
              <li>
                . If x is a String and y is a BigInt, return ! IsLooselyEqual(y,
                x).
              </li>
              <li>
                If x is a Boolean, return ! IsLooselyEqual(! ToNumber(x), y).
              </li>
              <li>
                {" "}
                If y is a Boolean, return ! IsLooselyEqual(x, ! ToNumber(y)).
              </li>
              <li>
                {" "}
                If x is either a String, a Number, a BigInt, or a Symbol and y
                is an Object, return ! IsLooselyEqual(x, ? ToPrimitive(y)).
              </li>
              <li>
                {" "}
                If x is an Object and y is either a String, a Number, a BigInt,
                or a Symbol, return ! IsLooselyEqual(? ToPrimitive(x), y).
              </li>
              <li>
                13. If x is a BigInt and y is a Number, or if x is a Number and
                y is a BigInt, then
                <ul>
                  <li>
                    a. If x is not finite or y is not finite, return false.
                  </li>
                  <li>
                    b. If ℝ(x) = ℝ(y), return true; otherwise return false.
                  </li>
                </ul>
              </li>
              <li> Return false.</li>
            </ol>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}> IsStrictlyEqual (===)</h3>
            <p>
              The abstract operation IsStrictlyEqual takes arguments x (an
              ECMAScript language value) and y (an ECMAScript language value)
              and returns a Boolean. It provides the semantics for the ===
              operator. It performs the following steps when called:
            </p>
            <ol>
              <li>If Type(x) is not Type(y), return false.</li>
              <li>If x is a Number, then a. Return Number::equal(x, y).</li>
              <li> Return SameValueNonNumber(x, y).</li>
            </ol>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Strict mode</h3>
            <ul>
              <li>
                changes converting mistakes into errors (as syntax errors or at
                runtime)
              </li>
              <li>changes simplifying how variable references are resolved</li>
              <li>changes simplifying eval and arguments</li>
              <li>changes making it easier to write secure JavaScript</li>
              <li>changes anticipating future ECMAScript evolution.</li>
            </ul>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Undefined / Null</h3>
            <p>
              The Undefined type has exactly one value, called undefined. Any
              variable that has not been assigned a value has the value
              undefined.
            </p>
            <p>The Null type has exactly one value, called null.</p>
            <p>
              null - primitive value that represents the intentional absence of
              any object value
            </p>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}> Let and Const Declarations</h3>
            <p>
              let and const declarations define variables that are scoped to the
              running execution contexts LexicalEnvironment. The variables are
              created when their containing Environment Record is instantiated
              but may not be accessed in any way until the variables
              LexicalBinding is evaluated. A variable defined by a
              LexicalBinding with an Initializer is assigned the value of its
              Initializers AssignmentExpression when the LexicalBinding is
              evaluated, not when the variable is created. If a LexicalBinding
              in a let declaration does not have an Initializer the variable is
              assigned the value undefined when the LexicalBinding is evaluated.
            </p>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Variable Statement</h3>
            <p>
              A var statement declares variables that are scoped to the running
              execution contexts VariableEnvironment. Var variables are created
              when their containing Environment Record is instantiated and are
              initialized to undefined when created. Within the scope of any
              VariableEnvironment a common BindingIdentifier may appear in more
              than one VariableDeclaration but those declarations collectively
              define only one variable. A variable defined by a
              VariableDeclaration with an Initializer is assigned the value of
              its Initializers AssignmentExpression when the VariableDeclaration
              is executed, not when the variable is created.
            </p>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>JavaScript modules</h3>
            <p>
              JS modules (also known as “ES modules” or “ECMAScript modules”)
              are a major new feature, or rather a collection of new features.
              You may have used a userland JavaScript module system in the past.
              Maybe you used CommonJS like in Node.js, or maybe AMD, or maybe
              something else. All of these module systems have one thing in
              common: they allow you to import and export stuff.
            </p>
            <Link href={"https://v8.dev/features/modules"}>more</Link>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Script</h3>
            <p>
              The script element allows authors to include dynamic script and
              data blocks in their documents. The element does not represent
              content for the user.
            </p>
            <hr />
            <p>
              Omitting the attribute, setting it to the empty string, or setting
              it to a JavaScript MIME type essence match, means that the script
              is a classic script, to be interpreted according to the JavaScript
              Script top-level production. Classic scripts are affected by the
              async and defer attributes, but only when the src attribute is
              set. Authors should omit the type attribute instead of redundantly
              setting it.
            </p>
            <hr />
            <p>
              For classic scripts, if the async attribute is present, then the
              classic script will be fetched in parallel to parsing and
              evaluated as soon as it is available (potentially before parsing
              completes). If the async attribute is not present but the defer
              attribute is present, then the classic script will be fetched in
              parallel and evaluated when the page has finished parsing. If
              neither attribute is present, then the script is fetched and
              evaluated immediately, blocking parsing until these are both
              complete.
            </p>
            <hr />
            <p>
              The defer attribute may be specified even if the async attribute
              is specified, to cause legacy web browsers that only support defer
              (and not async) to fall back to the defer behavior instead of the
              blocking behavior that is the default.
            </p>
            <hr />
            <Link
              href={
                "https://html.spec.whatwg.org/multipage/scripting.html#attr-script-defer"
              }
            >
              more
            </Link>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Higher-order function</h3>
            <p>
              In mathematics and computer science, a higher-order function (HOF)
              is a function that does at least one of the following:
            </p>
            <ul>
              <li>
                takes one or more functions as arguments (i.e. a procedural
                parameter, which is a parameter of a procedure that is itself a
                procedure),
              </li>
              <li>returns a function as its result.</li>
            </ul>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>ToBoolean</h3>The abstract operation
            ToBoolean takes argument argument (an ECMAScript language value) and
            returns a Boolean. It converts argument to a value of type Boolean.
            It performs the following steps when called:
            <p></p>
            <ol>
              <li>If argument is a Boolean, return argument.</li>
              <li>
                If argument is one of undefined, null, +0𝔽, -0𝔽, NaN, 0ℤ, or the
                empty String, return false.
              </li>
              <li>NOTE: This step is replaced in section B.3.6.1.</li>
              <li>Return true.</li>
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
