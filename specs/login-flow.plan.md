# LeafTaps Login Flow

## Application Overview

Focused end-to-end coverage of a successful login to the LeafTaps OpenTaps application using the supplied demo account. Starting state is a fresh browser session with no authenticated user.

## Test Scenarios

### 1. Successful login

**Seed:** `seed.spec.ts`

#### 1.1. Log in with the supplied demo credentials

**File:** `specs/login-flow.spec.ts`

**Steps:**
  1. Starting from a fresh browser session, navigate to https://leaftaps.com/opentaps/control/login.
    - expect: The login page is displayed with username and password inputs and a login control.
  2. Enter username democsr and password crmsfa in their respective fields.
    - expect: The username and password fields contain the supplied values; the password is treated as a password input.
  3. Activate the login control.
    - expect: Login succeeds and the application navigates away from the login page to its authenticated landing page.
  4. Verify the resulting page and current URL.
    - expect: An authenticated LeafTaps/OpenTaps page is visible (rather than a login form or an authentication error), confirming successful access.
