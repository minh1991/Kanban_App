package com.kanbanAppBE.ppmtool.exceptions;

public class ProjectIdExceptionRespose {
	private String projectIdentifer;

	public ProjectIdExceptionRespose(String projectIdentifer) {
		this.projectIdentifer = projectIdentifer;
	}

	public String getProjectIdentifer() {
		return projectIdentifer;
	}

	public void setProjectIdentifer(String projectIdentifer) {
		this.projectIdentifer = projectIdentifer;
	}

}
