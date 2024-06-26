# Todo

Feb 10th, 2024

### Frontend

Make each form modular. Have the designs as schema/form => action => CRUD DB

- [x] Supplements
- [x] Exercise
  - [x] Exercise Action
  - [x] Exercise Modular Form
- [x] Sleep
- [x] Health
  - [x] Mental Health Descriptors for select drop down menu
- [x] Misc

  - [x] Make one large form for the misc. Its one off yes/no with time frames. (might not be worth it to remove only a few lines of code)

Feb 14th, 2024

- [ ] Coding design: Make the boiler plate for the input component reusable. This will save hundreds of lines of code and a lot of copy pasta
      edit the above is a bit tedious. I am learning generics and how to use them but it has been cumbersome to use on top of react-hook-form (march 14th, 2024)
- Supplements
  - [x] Make amount type able to be chosen or selected with mcg and mg
  - [x] Make Time Taken a clock
- Stress
  - [x] Add stress as a category for measuring
    - Fields should be as followed
    - [x] Stress scale (1-10)
    - [x] Stress symptoms (select 5)
    - [x] Description of current state of mind/life/journal (optional for user)
    - [x] Actions for form
- Mental/Physical Health
  - [ ] Add descriptions/notes section (optional for user)
- Sleep
  - [ ] Add description section for sleep (optional for user)
- Meals

  - [ ] Add a meals category for when you ate/snacked/big meals
    - This will show how eating is impacting you (one to many relation)
    - [ ] Add when you ate
    - [ ] A field with healthy/non healthy for simplicity
    - [ ] How much you ate (relative calories)
    - [ ] Add a field for how much macros you are getting (optional field)
    - [ ] Add a section for a crash

- CRUD
- [x] I can look back in time and edit entries
- [x] I can see the journal/day entry based on the selected day
- [x] Health descriptors are not being saved correctly. Fix this asap
- [x] Zod Schema is hard to work with for the use case I want=
- [x] Users are required to fill out health, stress, and sleep. These are three things that anybody can describe at a given moment of the day.

- Features
  -- These components will be highly dependent of each other. Exactly the same almost
- [ ] Users can have multiple entries for stress
- [ ] Users can have multiple entries for health

- [ ] Fix updateDay.tsx, schema.ts, and dayAction to accommodate multiple uploads for each.

- [x] fix exercise selection data insert
- [ ] Users will receive a success message after updating the day
- [ ] Users will receive a success message after creating a day

- [x] Fix logic for initial state for day provider context

March 1st

- [x] UX: Users can have configured supplement values to add instead of filling out a form every time

Users are shown more attributes to choose from for symptoms/descriptions

!important I need better data points. The data I am using right now isn't that descriptive and is lacking

- [ ] Mental Health
- [ ] Physical Health
- [ ] Stress
- [ ] Sleep

- Mental/Physical Health
- [ ] Add descriptions/notes section (optional for user)
- Sleep
  - [ ] Add description section for sleep (optional for user)

#### Supplement configuration

- [x] when the user submits the supplement to be added it will remove all ingredients and reset the latest supplement name, brand name, and service size
- [x] When the user submits the supplement the supplements will be updated on the left hand side
- [x] Users can toggle which supplements that they are actively taking to lower the amount to choose from on the main form.
- [x] Users can edit their supplements they input incase of mistakes
- [x] User can choose from a predefined supplement list when filling out their forms
- [ ] When users manually create supplements, they are given a list of predefined ingredients to abide to standards for data metrics
- [ ] When users manually create supplements, that are given a list of predefined brand names and list of products from those brand names.
- [x] Users can select which supplements and how many capsules/servings they have taken on the day form.
- [x] Update edit and edit action
- [x] update create action
      Security for supplementation configuration
- [ ] Add time stamp to chosen supplement (UI)
- [x] Update read action for supplements
- [ ] Plan your features out appropriately so changes aren't so cumbersome and you can reuse components. I need designs and a laundry list of features to plan from
- [ ] DO better schema planning. Everything is a fucking mess. WRITE DOWN A DEPENDENCY GRAPH
- [x] Reuse components so you stay D.R.Y
- [x] Backfill data from supplements
- [x] Update forms show appropriate forms based on information provided ie, exercise and supplements and 'more forms'
- [ ] (optional) if a user un-clicks an optional form the data is saved if the user c it is being edited

March 14th, 2024

- [x] Remove all unused packages and switch fetches to react-query
- [x] Back fill supplement data in older dates
- [ ] Review your code. What patterns do you like? What do you not like? What can you improve and how?
- [ ] Get a features list together and have better organization with planning this software. What is the main purpose of building this software? How do the features importance align with that goal? (Data Visualization, Data metrics/appropriate data for metrics)
- [ ] Architectural patterns. When to use enums? When to allow user inserted data to persist? AI tool to autocorrect user input? Database schema designs for the best interactions.
- [ ] Map out what data and data points i need from the features. Symptoms (select and create new ones). Health Measurements (need guidelines on what is a 0 and what is a 10 or a tool to interpret their baseline?)
- [ ] Learn more about enums and if its a good idea to use them as I am.

- [x] Re-config fetch components
      Components - [x] ConfiguredSupplements, (Create a hook bc its used in many places)

- [ ] Add loading states to components

- [ ] Create configuration table for users when they are created or find a new way of implementing this
- [ ] Learn how to use generics to make code more versatile

Issues Im running into

- Schema planning was very poor
- Naming files the same names even if they are in different folders is hard to work with
- Undefined objects (bug)
- Over engineering ts types
- Type bloat (not having a single source of truth)...
- Making one big form for everything has made developing modular parts more problematic than it should've been

- [ ] Rate limiting
- [x] Form validation and max lengths
- [ ] Script injections testing
- [ ] Component Testing

Issues: Data standards for micro-nutrients and macro-nutrients. Either cast a large net or have very specific values/names to go by.

### Testing

- [ ] test clerk user creation/deletion/update functionality
- [ ] unit testing
- [ ] form testing (need to learn how to do this one)

# Idea

An app to track travel expenses with a group
You create a group and add people to the group. The person who pays adds their receipts to the group. AI tracks it for users to claim what they bought from that receipt.
Make an easy way to pay back friends/family from traveling/going out.
Itemization to tax payout to tip payout.
