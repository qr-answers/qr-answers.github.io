---
layout: home
title: API
parent: Developer
nav_order: 1
---

<div class="sticky-gotop">
<span class="inline-icon"><i class="fa-solid fa-arrow-up"></i></span>
</div>

# API
{: .no_toc }

<div class="sticky-gotop">
<span class="inline-icon"><i class="fa-solid fa-arrow-up"></i></span>
</div>
<div class="sticky-right">
<details markdown="block">
  <summary>
    Quick Links
  </summary>
  {: .text-delta }
- Quick Links
{: toc}
</details>
</div>

## npm install qranswers

To install the javascript package as part of your application, use:

```npm install qranswers```

## qranswers Module Usage

You will need your API key from the Developer accordion of [Manage Plan](../menu/home_menu.html#developer)

To initialize the qranswers module, you will need to have your API Key and load the module like this:

```
const apiKey = "api_e1238.....";
const qranswers = require("qranswers")(apiKey)
```

### Subscriptions
You may subscribe to real-time Responses in your application by initializing the subscription module and subscribing to the Responses you are looking for.  A Response is generated when someone scans the QR code for your answer.  The Response consists of the information as to what Project, Campaign, Location, Question and Answer was chosen.  Remember that an answer is scoped to a particular Campaign, Location and Question. Since the Question can be posted in more than one location, the unique identifier (we call it the baseId) is formed by this pattern:  &lt;campaignId&gt;_&lt;questionLoationId&gt;_&lt;locationId&gt;_&lt;questionId&gt;.  You may subscribe to Responses for all of your Campaigns, or you may subscribe to a single Question at a particular Location in a particular Campaign.  If you are using React (our recommendation), the pattern to follow is to subsribe and cleanup as follows (this code subscribes to all Responses):

```
const [qrInited, setQrInited] = useState(false);
...
useEffect(() => {
    if (qrInited) {
        const sub = qranswers.subscriptions.subscribeToAllResponses((response) => {
            console.lg('response', response);
        })
        return () => {
            // Subscriptions need to be cleaned up when the component unmounts
            qranswers.subscriptions.unsubscribeToAllResponses(sub);
        }
    }
}, [qrInited])

useEffect(() => {
    async function initQR()  {
        const initOk = await qranswers.subscriptions.initialize();
        setQrInited(initOk);
    }
    initQR();
}, [])
```

To subscribe to an individual Question's answers/Responses, follow this pattern (the baseId can be determined by going to the Developer section of the app and selecting <span class="form-label">Find Specific Question for API</span>, the clicking the 'copy' icon to get the baseId.  use the baseId below):

  <p align="center" class="screen-shot">
  <img class="image-border-qr" alt="find specific question" src="../../assets/images/find_specific_question.png">
  </p>


```
const baseId = "6dbbffc8-4742xxxx_54a2d82xxxx_f366dexxxx_f76c45axxxx";

const [qrInited, setQrInited] = useState(false);
...
useEffect(() => {
    if (qrInited) {
        const sub = qranswers.subscriptions.subscribeToASpecificQuestionResponses((response) => {
            console.lg('response', response);
        })
        return () => {
            // Subscriptions need to be cleaned up when the component unmounts
            qranswers.subscriptions.unsubscribeToAllResponses(sub);
        }
    }
}, [qrInited])

useEffect(() => {
    async function initQR()  {
        const initOk = await qranswers.subscriptions.initialize();
        setQrInited(initOk);
    }
    initQR();
}, [])
```




## API 

The API wrapper in the qranswers module makes calls to the REST APIs of qr-answers.com.  The base URL for all REST APIs is ```https://api.qr-answers.com/v1```.  For example, to get the list of Locations for a given Project ID ("56abd812_xxx"), the wrapper fetches ```https://api.qr-answers.com/v1/locations/list/56abd812_xxx``` with ```Authorization``` header of the API Key.  For example:

{: .note }
> IDs are 36 characters, for example: "6dbbffc8-4742-4bb5-9732-405c18965da1".  Rather than using real IDs, in our examples, we shorten the IDs to have _xxxx instead of all 36 characters.


```javascript
const url = "https://api.qr-answers.com/v1/locations/list/56abd812_xxx";
try {
    const result = await fetch(url, {
        headers: {
            Accept: '*/*',
            Authorization: this.apiKey
        }
    })
    const json = await result.json();
    return json;
} catch (err) {
    console.error(err);
}
```


Below are sample routines using the wrapper functions in the qranswers module.  These examples use React and a standard pattern of setting a 'fetching' variable to show a progress spinner, then retrieving the data, turning off the fetching progress spinner and returning the data via a setXXXX() useState() variable.  Here is the rendering pattern:

```jsx
const [fetchingProjects, setFetchingProject] = useState(false);
const [projects, setProjects] = useState(null);

...

{fetchingProjects && 
    <ActivityIndictor size="large" color="#0000ff" />
}
{!fetchingProjects && projects && projects.map((thisProject) => {
    return (
        <Text>{thisProject.name}</Text>
    )
})}

...
```

Sample routines using API wrapper:

### The Project Object
<span class="obj-attributes-title">Attributes</span>
<div class="obj-attribs">
    <div class="obj-pname">id<span class="obj-ptype">36 characters</span></div>
    <div class="obj-descr">The id is a 36 characer attribute that uniquely defines this Project</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">name<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The name is a string used to identify this Project</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">abbreviation<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The abbreviation is a short version of the name that is displayed during some presentations of results for this Project</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">tags<span class="obj-ptype">vertical bar delimited string</span></div>
    <div class="obj-descr">The tags is a string of vertgical bar limited tags. For ecample, "dog|pet|animal"</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">description<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The description is a string typed in to help identify the Project</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">clientID<span class="obj-ptype">36 characters</span></div>
    <div class="obj-descr">The clientID is a unique identifier for this Project's client/owner.</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">recordStatus<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The status of this record, could be one of 'active', 'archive', 'removed'</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">updatedAt<span class="obj-ptype">date time</span></div>
    <div class="obj-descr">The updatedAt values is a date/time string showing when the record was last updated. e.g. '2023-03-24T18:57:45.207Z'</div>
</div>

### Get Project
<span class="api-code">getProject(&lt;projectId&gt;)</span>
<span class="api-code-descr">Use getProject to retrieve a Project's Attributes </span>
```javascript
    const projectId = "56abd812_xxx";
    const projRet = await.api.getProject(projectId);

```
### List Projects
<span class="api-code">getProjectList()</span>
<span class="api-code-descr">Use getProjectList to retrieve an array of all Project's</span>

```jsx
// Projects are retrieved based on your API Key.  If your API key is only valid for particular Projects, then
// you will only retrieve the Projects you have access to
  const fetchProjects = async () => {
    setFetchingProjects(true);
    const projRet = await qranswers.api.getProjectList();
    setFetchingProjects(false);
    // returns {success: 'success', data: [...]} or {error: 'error message'}
    if (projRet.data) {
      setProjects(projRet.data);
    } else {
      console.log(projRet);   
    }
```

### The Campaign Object
<span class="obj-attributes-title">Attributes</span>
<div class="obj-attribs">
    <div class="obj-pname">id<span class="obj-ptype">36 characters</span></div>
    <div class="obj-descr">The id is a 36 characer attribute that uniquely defines this Campaign</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">name<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The name is a string used to identify this Campaign</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">abbreviation<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The abbreviation is a short version of the name that is displayed during some presentations of results for this Campaign</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">tags<span class="obj-ptype">vertical bar delimited string</span></div>
    <div class="obj-descr">The tags is a string of vertgical bar limited tags. For ecample, "dog|pet|animal"</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">description<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The description is a string typed in to help identify the Campaign</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">disposition<span class="obj-ptype">integer</span></div>
    <div class="obj-descr">0 = draft; 1 = active, 2 = inactive, 3 = archives</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">settings<span class="obj-ptype">object</span></div>
    <div class="obj-descr">The settings value is a JSON object with information on how the Campaign questions and answers are rendered to the output.  There are too many parameeres to list here (and they are read-only, so there is no need to describe them).</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">schedule<span class="obj-ptype">string</span></div>
    <div class="obj-descr">"onetime" = the voter may only vote one (1) time; "hourly" = the voter may registe their vote each hour; "daily" = the voter may register a vote once per day; "nolimit" = the voter may vote as many times as they like</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">clientID<span class="obj-ptype">36 characters</span></div>
    <div class="obj-descr">The clientID is a unique identifier for this Campaign's client/owner.</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">recordStatus<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The status of this record, could be one of 'active', 'archive', 'removed'</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">updatedAt<span class="obj-ptype">date time</span></div>
    <div class="obj-descr">The updatedAt values is a date/time string showing when the record was last updated. e.g. '2023-03-24T18:57:45.207Z'</div>
</div>

### Get Campaign
<span class="api-code">getCampaign(&lt;campaignId&gt;)</span>
<span class="api-code-descr">Use getCampaign to retrieve a Campaign's Attributes </span>
```javascript
    const campaignId = "193ab812_xxx";
    const campaignRet = await.api.getCampaign(campaignId);

```

### List Campaigns
```
  // Multiple Campaigns per Project Id.
  const [campaigns, setCampaigns] = useState({});   

  // Campaigns are retrieved based on the project Id
  const fetchCampaigns = async (projectId) => {
    setFetchingCampaigns({...fetchingCampaigns, [projectId]: true});
    const getRes = await qranswers.api.getCampaignList(projectId);
    if (getRes.data) {
      var newList = {...campaigns};
      newList[projectId] = getRes.data;
      newList[projectId].visible = true;
      setCampaigns(newList);
    } else {
      console.log(getRes);
    }
    setFetchingCampaigns({...fetchingCampaigns, [projectId]: false});
  };
  ```


### The Location Object
<span class="obj-attributes-title">Attributes</span>
<div class="obj-attribs">
    <div class="obj-pname">id<span class="obj-ptype">36 characters</span></div>
    <div class="obj-descr">The id is a 36 characer attribute that uniquely defines this Location</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">name<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The name is a string used to identify this Location</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">tags<span class="obj-ptype">vertical bar delimited string</span></div>
    <div class="obj-descr">The tags is a string of vertgical bar limited tags. For ecample, "dog|pet|animal"</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">description<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The description is a string typed in to help identify the Location</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">latitude<span class="obj-ptype">float</span></div>
    <div class="obj-descr">The latitude of this location if used.   This may be set by entering it manually on the Edit Location page, or you may use the location icon to access your current location.</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">longitude<span class="obj-ptype">float</span></div>
    <div class="obj-descr">The longitude of this location if used.   This may be set by entering it manually on the Edit Location page, or you may use the location icon to access your current location.</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">projectID<span class="obj-ptype">36 characters</span></div>
    <div class="obj-descr">The projectID is a unique identifier for this Location's containing Project</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">recordStatus<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The status of this record, could be one of 'active', 'archive', 'removed'</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">updatedAt<span class="obj-ptype">date time</span></div>
    <div class="obj-descr">The updatedAt values is a date/time string showing when the record was last updated. e.g. '2023-03-24T18:57:45.207Z'</div>
</div>

### Get Location
<span class="api-code">getLocation(&lt;locationId&gt;)</span>
<span class="api-code-descr">Use getLocation to retrieve a Location's Attributes </span>
```javascript
    const locationId = "922ab812_xxx";
    const lcoationRet = await.api.getLocation(locationId);

```

### List Locations
  ```
  // Multiple Locations per Project Id.
  const [locations, setLocations] = useState({});

  // Locations are retrieved based on the project Id
  const fetchLocations = async (projectId) => {
    setFetchingLocations({...fetchingLocations, [projectId]: true});
    const getRes = await qranswers.api.getLocationList(projectId);
    if (getRes.data) {
      var newList = {...locations};
      newList[projectId] = getRes.data;
      newList[projectId].visible = true;
      setLocations(newList);
    } else {
      console.log(getRes);
    }
    setFetchingLocations({...fetchingLocations, [projectId]: false});
  };

  ```

### The Question Object
<span class="obj-attributes-title">Attributes</span>
<div class="obj-attribs">
    <div class="obj-pname">id<span class="obj-ptype">36 characters</span></div>
    <div class="obj-descr">The id is a 36 characer attribute that uniquely defines this Question</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">text<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The text is the actual question itself</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">tags<span class="obj-ptype">vertical bar delimited string</span></div>
    <div class="obj-descr">The tags is a string of vertgical bar limited tags. For ecample, "dog|pet|animal"</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">description<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The description is a string typed in to help identify the Question</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">answerOrder<span class="obj-ptype">array of IDs</span></div>
    <div class="obj-descr">If the order of the Answers was changed from how they were entered, this attribute cotnains an array of the Answer IDs in the order they should be displayed.</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">projectID<span class="obj-ptype">36 characters</span></div>
    <div class="obj-descr">The projectID is a unique identifier for this Question's containing Project</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">recordStatus<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The status of this record, could be one of 'active', 'archive', 'removed'</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">updatedAt<span class="obj-ptype">date time</span></div>
    <div class="obj-descr">The updatedAt values is a date/time string showing when the record was last updated. e.g. '2023-03-24T18:57:45.207Z'</div>
</div>

### Get Question
<span class="api-code">getQuestion(&lt;questionId&gt;)</span>
<span class="api-code-descr">Use getQuestion to retrieve a Question's Attributes </span>
```javascript
    const questionId = "9a891812_xxx";
    const questionRet = await.api.getQuestion(questionId);

```

### List Questions
  ```
  // Multiple Questions per Project Id.
  const [questions, setQuestions] = useState({});

  // Questions are retrieved based on the project Id
  const fetchQuestions = async (projectId) => {
    setFetchingQuestions({...fetchingQuestions, [projectId]: true});
    const getRes = await qranswers.api.getQuestionList(projectId);
    if (getRes.data) {
      var newList = {...questions};
      newList[projectId] = getRes.data;
      newList[projectId].visible = true;
      setQuestions(newList);
    } else {
      console.log(getRes);
    }
    setFetchingQuestions({...fetchingQuestions, [projectId]: false});
  };

  ```

### The Answer Object
<span class="obj-attributes-title">Attributes</span>
<div class="obj-attribs">
    <div class="obj-pname">id<span class="obj-ptype">36 characters</span></div>
    <div class="obj-descr">The id is a 36 characer attribute that uniquely defines this Answer</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">text<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The text is the actual question itself</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">imageUrl<span class="obj-ptype">string</span></div>
    <div class="obj-descr">If the answer has an image, this is the URL to the image</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">tags<span class="obj-ptype">vertical bar delimited string</span></div>
    <div class="obj-descr">The tags is a string of vertgical bar limited tags. For ecample, "dog|pet|animal"</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">description<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The description is a string typed in to help identify the Answer</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">ansType<span class="obj-ptype">integer</span></div>
    <div class="obj-descr">0 = text answer; 1 = image answer; 2 = image + text answer</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">link<span class="obj-ptype">string</span></div>
    <div class="obj-descr">A URL to place on the results page after a voter scans a QR code.  The results page will show a graph and this link if provided.  The text for this link is put in the <span class="obj-pname-embed">linkDescription</span> attribute.</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">linkAction<span class="obj-ptype">string</span></div>
    <div class="obj-descr">"redirect' = redirect to the <span class="obj-pname-embed">link</span> provided vs. display a results page; "embed" = place the <span class="obj-pname-embed">linkDescription</span> text on the results page and have it link to the <span class="obj-pname-embed">link</span> attribute.</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">linkDescription<span class="obj-ptype">string</span></div>
    <div class="obj-descr">This is the text displayed if a link is entered.  See <span class="obj-pname-embed">link</span> above.</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">questionID<span class="obj-ptype">36 characters</span></div>
    <div class="obj-descr">The questionID is a unique identifier for this Answer's containing Question</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">projectID<span class="obj-ptype">36 characters</span></div>
    <div class="obj-descr">The projectID is a unique identifier for this Question's containing Project</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">recordStatus<span class="obj-ptype">string</span></div>
    <div class="obj-descr">The status of this record, could be one of 'active', 'archive', 'removed'</div>
</div>
<div class="obj-attribs">
    <div class="obj-pname">updatedAt<span class="obj-ptype">date time</span></div>
    <div class="obj-descr">The updatedAt values is a date/time string showing when the record was last updated. e.g. '2023-03-24T18:57:45.207Z'</div>
</div>

### Get Answer
<span class="api-code">getAnswer(&lt;answerId&gt;)</span>
<span class="api-code-descr">Use getAnswer to retrieve a Answer's Attributes </span>
```javascript
    const answerId = "abef11812_xxx";
    const answerRet = await.api.getAnswer(answerId);

```

### List Answers
  ```
  // Answers are retrieved based on the Question Id
  const fetchAnswers = async (questionId) => {
    setFetchingAnswers({...fetchingAnswers, [questionId]: true});
    const getRes = await qranswers.api.getAnswerList(questionId);
    if (getRes.data) {
      var newList = {...answers};
      newList[questionId] = getRes.data;
      newList[questionId].visible = true;
      setAnswers(newList);
    } else {
      console.log(getRes);
    }
    setFetchingAnswers({...fetchingAnswers, [questionId]: false});
  };
  ```