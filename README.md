# Cloud Banking :euro:

![icon](docs/img/icon.png)

![Rust](https://github.com/pepitoenpeligro/CloudBanking/workflows/Rust/badge.svg)
![Check cc.yaml file](https://github.com/pepitoenpeligro/CloudBanking/workflows/Check%20cc.yaml%20file/badge.svg)


:warning: **The development of the project is under construction**


:bookmark_tabs: Source Code Documentation of this proyect is available in [CloudBankingDocs](https://htmlpreview.github.io/?https://github.com/pepitoenpeligro/CloudBanking/blob/master/docs/documentation/CloudBanking/index.html)

:mag_right: The description of the problem can be found in [Problem-Description](https://github.com/pepitoenpeligro/CC-Project/blob/master/docs/problem-description.md)

:checkered_flag: A technological feasibility study and the argument of the technologies finally proposed to be used in the project can be consulted at [Feasibility Study](https://github.com/pepitoenpeligro/CC-Project/blob/master/docs/feasibility-study.md)

:factory: A description of the architecture can be found at [Architecture Description](https://github.com/pepitoenpeligro/CC-Project/blob/master/docs/tecnology-architecture-description.md)

:rocket: A initial setup of project in Rust can be found at [Project Rust Init](https://github.com/pepitoenpeligro/CC-Project/blob/master/docs/project-rust-setup.md)

:hammer: Initial Setup of Git and GitHub [Initial Configuration](https://github.com/pepitoenpeligro/CC-Project/blob/master/docs/environmentConfiguration.md)

:bookmark_tabs: The list of tasks and the status of the project can be found at [Project Plan](https://github.com/pepitoenpeligro/CloudBanking/projects/1)


## Basic Structure 

```bash
src
├── bankaccount
│   ├── mod.rs
│   └── model.rs
├── bankcard
│   ├── mod.rs
│   └── model.rs
├── bankfund
│   ├── mod.rs
│   └── model.rs
├── controller
│   ├── mod.rs
│   └── model.rs
├── main.rs
├── paymentgroup
│   ├── mod.rs
│   └── model.rs
├── savinggroup
│   ├── mod.rs
│   └── model.rs
└── user
    ├── mod.rs
    └── model.rs
```

:surfer: The project can __be compiled__ without errors


```
cargo build
cargo run
```


## Milestones and issues covered :wrench:
* [Milestone 0](https://github.com/pepitoenpeligro/CloudBanking/milestone/1)
  - [Create Readme.md](https://github.com/pepitoenpeligro/CloudBanking/issues/1)
  - [Create .gitignore](https://github.com/pepitoenpeligro/CloudBanking/issues/2)
  - [Create documentation directory](https://github.com/pepitoenpeligro/CloudBanking/issues/3)
  - [Fill documentation with design of the project and technologies to use](https://github.com/pepitoenpeligro/CloudBanking/issues/4)
  - [Adding License GPLv3](https://github.com/pepitoenpeligro/CloudBanking/issues/6)
  - [Justify Environment Configuration](https://github.com/pepitoenpeligro/CloudBanking/issues/7)
  - [Re-try Milestone 0](https://github.com/pepitoenpeligro/CloudBanking/issues/8)
* [Milestone 1](https://github.com/pepitoenpeligro/CloudBanking/milestone/2)
  - [Technology feasibility study](https://github.com/pepitoenpeligro/CloudBanking/issues/9)
  - [Change Name from CC-Project to CloudBanking and re-describe problem to solve](https://github.com/pepitoenpeligro/CloudBanking/issues/10)
  - [Architecture description](https://github.com/pepitoenpeligro/CloudBanking/issues/11)
  - [Milestones and Issues description involved in this project](https://github.com/pepitoenpeligro/CloudBanking/issues/12)
  - [Create initial project structure in rust](https://github.com/pepitoenpeligro/CloudBanking/issues/31)
  - [Create basic structure](https://github.com/pepitoenpeligro/CloudBanking/issues/32)
  - [Create Entity descriptor (cc.yaml) enhancement](https://github.com/pepitoenpeligro/CloudBanking/issues/33)
* [User-Stories (HU)](https://github.com/pepitoenpeligro/CloudBanking/milestone/3)
  -  [(HU1) Add bank account as customer user user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/13)
  -  [(HU2) Add bank-card as customer user](https://github.com/pepitoenpeligro/CloudBanking/issues/14)
  -  [(HU3) Add investment fund as customer user](https://github.com/pepitoenpeligro/CloudBanking/issues/15)
  -  [(HU4) Delete bank account as customer user user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/16)
  -  [(HU5) Delete bank card as customer user user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/17)
  -  [(HU6) Delete fund investment as customer user user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/18)
  -  [(HU7) Create saving-group user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/19)
  -  [(HU8) Exit from saving-group user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/20)
  -  [(HU9) Create a payment-group user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/21)
  -  [(HU10) Exit from payment-group](https://github.com/pepitoenpeligro/CloudBanking/issues/22)
  -  [(HU11) Create alert-trigger for bank-account movement user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/23)
  -  [(HU12) Create alert-trigger for bank-card movement](https://github.com/pepitoenpeligro/CloudBanking/issues/24)
  -  [(HU13) Create alert-trigger for fund investment movement](https://github.com/pepitoenpeligro/CloudBanking/issues/25)
  -  [(HU14) Create account - register user](https://github.com/pepitoenpeligro/CloudBanking/issues/26)
  -  [(HU15) Loggin user](https://github.com/pepitoenpeligro/CloudBanking/issues/27)
  -  [(HU16) Erase Account](https://github.com/pepitoenpeligro/CloudBanking/issues/28)
  -  [(H17) Disable account](https://github.com/pepitoenpeligro/CloudBanking/issues/29)
  -  [(H18) Enable disabled account](https://github.com/pepitoenpeligro/CloudBanking/issues/30)



## Roadmap


### Development

In a __first phase__ I want to achieve a minimum viable product. In a first phase I want to achieve a minimum viable product like: __bank account__ and __bank card__ .On the other hand, we should be able to create an account as a client user and be able to log in.
* [(HU1) Add bank account as customer user user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/13)
* [(HU2) Add bank-card as customer user](https://github.com/pepitoenpeligro/CloudBanking/issues/14)
* [(HU14) Create account - register user](https://github.com/pepitoenpeligro/CloudBanking/issues/26)
* [(HU15) Loggin user](https://github.com/pepitoenpeligro/CloudBanking/issues/27)

In a __second phase__, I would develop additional functionalities with non-core entities such as __fund investment__, __payment group__ and __saving group__. 
* [(HU3) Add investment fund as customer user](https://github.com/pepitoenpeligro/CloudBanking/issues/15)
* [(HU7) Create saving-group user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/19)
* [(HU9) Create a payment-group user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/21)

In a __third phase__ it would be ideal to be able to carry out a minimal management with an administrator user. So the following user stories would be covered:
* [(H17) Disable account](https://github.com/pepitoenpeligro/CloudBanking/issues/29)
* [(H18) Enable disabled account](https://github.com/pepitoenpeligro/CloudBanking/issues/30)

In a __fourth phase__ of development it would be necessary to enable the ability to remove financial products from the user account, thus covering the following user stories
* [(HU4) Delete bank account as customer user user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/16)
* [(HU5) Delete bank card as customer user user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/17)
* [(HU6) Delete fund investment as customer user user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/18)
* [(HU8) Exit from saving-group user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/20)
* [(HU10) Exit from payment-group](https://github.com/pepitoenpeligro/CloudBanking/issues/22)
* [(HU16) Erase Account](https://github.com/pepitoenpeligro/CloudBanking/issues/28)

In a __fifth phase__ of development it would be ideal to implement the functionalities related to the creation of alerts on financial products.
* [(HU11) Create alert-trigger for bank-account movement user-stories](https://github.com/pepitoenpeligro/CloudBanking/issues/23)
* [(HU12) Create alert-trigger for bank-card movement](https://github.com/pepitoenpeligro/CloudBanking/issues/24)
* [(HU13) Create alert-trigger for fund investment movement](https://github.com/pepitoenpeligro/CloudBanking/issues/25)

The implementation of the respective __system logs__ would be transversal to the whole project

### Testing


### Encapsulation in containers


### Evaluation and Acquisition of the virtual infrastructure


### Measurement and Estimation of Costs and Performance


### Software Deployment and Orchestration



## References :books:
* [Rust](https://www.rust-lang.org)
* [warp](https://github.com/seanmonstar/warp)
* [serde](https://github.com/serde-rs/serde)
* [parking_lot](https://github.com/Amanieu/parking_lot)
* [Emojis](https://gist.github.com/rxaviers/7360908)



