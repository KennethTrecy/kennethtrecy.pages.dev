#!/usr/bin/env pwsh
param($branch)

git checkout template--$branch
git pull template $branch
git checkout merged_template

git merge template--$branch
if ($LastExitCode -ne 0) {
	& git status

	$answer = Read-Host -prompt "Have you fixed the conflicts? Enter 'y' to continue"
	if ($answer -eq "y") {
		& git add .
		& git commit
	} else {
		exit 1
	}
}

git merge dev
if ($LastExitCode -ne 0) {
	& git status

	$answer = Read-Host -prompt "Have you fixed the conflicts (currently in merged template)? Enter 'y' to continue"
	if ($answer -eq "y") {
		& git add .
		& git commit
	} else {
		exit 1
	}
}

git checkout dev
git checkout merged_template -- .

if ($LastExitCode -ne 0) {
	& git status

	$answer = Read-Host -prompt "Have you fixed the conflicts (currently in dev)? Enter 'y' to continue"
	if ($answer -ne "y") {
		exit 1
	}
}

& git add .
& git commit -m "chore: update the files from template"
