import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = StyleSheet.create({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export default class Itens extends Component {
  render() {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            image="{{this.props.item.foto}}"
            title="Imagem do Produto"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.item.titulo}
            </Typography>
            <Typography component="p">
              {this.props.item.valor}
            </Typography>
            <Typography component="p">
              {this.props.item.local_anuncio}
            </Typography>
            <Typography component="p">
              {this.props.item.data_publicacao}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      // <View>
      //   <Image
      //     style={{ height: 100, width: 100}}
      //     source={{ uri: this.props.item.foto}}
      //   />
      //   <Text>{this.props.item.titulo}</Text>
      //   <Text>{this.props.item.valor}</Text>
      //   <Text>{this.props.item.local_anuncio}</Text>
      //   <Text>{this.props.item.data_publicacao}</Text>
      // </View>
    );
  }
}
