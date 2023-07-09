import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/user-api.service';


@Component({
  selector: 'app-cutters',
  templateUrl: './cutters.page.html',
  styleUrls: ['./cutters.page.scss'],
})
export class CuttersPage implements OnInit {
  characters: any[] = [];

  constructor(private apiService: ApiserviceService, private router: Router) { }

  ngOnInit() {
    // this.getCharacters()
    this.getAllCharacters()
  }

  getCharacters(event?:any){
    // this.params.page += 1;
    this.apiService.getCharacter(1).subscribe({
      next: (res: any) => {
        console.log(res)
      }
    })
  }

  getAllCharacters(){
    // this.params.page += 1;
    this.apiService.getAllCharacters().subscribe({
      next: (res: any) => {
        this.characters = res.results
        console.log(this.characters)
      }
    })
  }

  navigation(character: any){
    this.router.navigate(['/profile'],{
      state: {
        character : character 
      }
  })
  }


}