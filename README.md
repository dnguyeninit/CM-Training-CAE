# CMCC-11 Content Application Engineering Trail

This workspace contains the code that is used in our self-learning video course 
**CMCC-11 Content Application Engineering Trail**.

The workspace intended as a supplementary learning resource and 
**should not be used** as a foundation for a CoreMedia Content Cloud project!

If you want to start your own CMCC-11 project, please use the [CoreMedia Blueprint GitHub mirror repository](https://github.com/coremedia-contributions/coremedia-blueprints-workspace)
for customers and partners as a starting point.

## Branches

This repository contains two branches:

- `main` - contains the Blueprint workspace, prepared for training.
   This branch will be the starting point for your own hands-on exercises.
- `cae-exercises` - contains the exercises and improvements from the hands-on 
   session of the video course as separate commits.

## Extensions

This workspace contains an extension with name 'training' , which is the base of
all customizations. You will find this extension in the following applications:

- `content-server` 
- `cae` (The focus of this couse)
- `headless-server` 
- `studio-client`

The extension 'training' adds a new content type "CMVideoTutorial" to the 
content type model which will be used in our customizations.

If you want to learn more about these changes, please visit the video course 
[Working with Extensions](https://enablement.coremedia.com/course/working-with-extensions).

The focus of this video course is the training extension of the CAE app.
Your starting point is [training-cae](./apps/cae/modules/extensions/training/training-cae).

## Documentation

Refer to the Getting Started chapter of the product's Developer Manual for a detailed description of the project workspace.


## Structure

The Blueprint is separated into several (sub-)workspaces, which are grouped into five categories:

* `apps` - containes a subfolder for each CoreMedia application workspace
* `content` - contains `test-data` folders with test content and test user definitions
* `frontend` - contains the CoreMedia frontend workspace
* `shared` - contains two workspaces with shared code: `common` and `middle`
* `global` - contains `deployment`, `examples` and `management-tools`

See Blueprint Developer Manual, section "Structure of the Workspace", for details.

For information on managing extensions, refer to [workspace-configuration/extensions/README.md](./workspace-configuration/extensions/README.md).

## Deployment

The `deployment` folder contains

* an out-of-the-box deployment example using the configuration management framework _Chef_. Refer to [global/deployment/chef/README.adoc](./global/deployment/chef/README.adoc) for details.
* a Docker Compose setup. Refer to [global/deployment/docker/README.adoc](./global/deployment/docker/README.adoc) for details.

## Updates

The Enablement team might update this workspace by overwriting existing branches and commits
(using rebase and forced pushes). This might be necessary when new exercises are added to our courses 
or when existing exercises are improved.

Such changes alter the commit history of this workspace and are therefore considered "bad practice" 
by many developers. However, the goal of this workspace is to support our training courses. 
Therefore, a clear branch structure is more important to us than a traceable change history.  


